import * as React from 'react';
import MaterialLink from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios'; // Import axios for making API requests
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

interface Career {
  id: number;
  name: string;
  institution: string;
  modality: string;
  duration: number;
  duration_unit: string;
  presentation_year: number;
  main_location: string;
  grad_profile: string;
  academic_level: string;
  private: boolean;
  chaside_letter: string;
}
interface CareersProps {
  setUpdateCareer: React.Dispatch<React.SetStateAction<number>>;
}
export const Careers: React.FC<CareersProps> = ({ setUpdateCareer }) => {
  const [careers, setCareers] = React.useState<Career[]>([]);

  React.useEffect(() => {
    // Fetch career data from the API
    const userEmail = localStorage.getItem('userEmail');

    //axios.get(`https://careerwise-api.crossnox.dev/admins/${userEmail}/careers`) // Replace with your API endpoint
    axios.get(`https://careerwise-api.crossnox.dev/careers`) // Replace with your API endpoint
    .then(response => {
        setCareers(response.data);
      })
      .catch(error => {
        console.error('Error fetching career data:', error);
      });
  }, []);

  const handleDeleteCareer = (id: number) => {
    console.log(id);
    const userEmail = localStorage.getItem('userEmail');
    axios.delete(`https://careerwise-api.crossnox.dev/admins/${userEmail}/${id}`) // Replace with your API endpoint
      .catch(error => {
        console.error('Error fetching career data:', error);
      });
    handleSetCareers()
  };

  const handleSetCareers = () => {
    const userEmail = localStorage.getItem('userEmail');

    axios.get(`https://careerwise-api.crossnox.dev/admins/${userEmail}/careers`)
    .then(response => {
        setCareers(response.data);
      })
      .catch(error => {
        console.error('Error fetching career data:', error);
      });
  };

  const handleUpdateCareer = (id: number) => {
    console.log(id);
    setUpdateCareer(id)
  };

  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Institution</TableCell>
            <TableCell>Modality</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Presentation Year</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {careers.map((career) => (
            <TableRow key={career.id}>
              <TableCell>{career.name}</TableCell>
              <TableCell>{career.institution}</TableCell>
              <TableCell>{career.modality}</TableCell>
              <TableCell>{`${career.duration} ${career.duration_unit}`}</TableCell>
              <TableCell>{career.presentation_year}</TableCell>
              <TableCell>
                <Button onClick={() => handleUpdateCareer(career.id)}>
                  <EditIcon />
                </Button>
                <Button onClick={() => handleDeleteCareer(career.id)}>
                  <DeleteIcon />
                </Button>
                <Button
                  component={Link}
                  to={`/boost-career/${career.id}`} // Make sure you are passing the career ID here
                  variant="contained"
                  color="primary"
                  >
                    Boost
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <MaterialLink color="primary" href="#" onClick={(event) => event.preventDefault()} sx={{ mt: 3 }}>
        See more careers
      </MaterialLink>
    </React.Fragment>
  );
}

export default Careers;