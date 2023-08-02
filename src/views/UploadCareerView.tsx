import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

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

const UploadCareerForm: React.FC = () => {
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [careerData, setCareerData] = React.useState<Career>({
    id: 0,
    name: '',
    institution: '',
    modality: '',
    duration: 0,
    duration_unit: '',
    presentation_year: 0,
    main_location: '',
    grad_profile: '',
    academic_level: '',
    private: false,
    chaside_letter: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setCareerData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
        const userEmail = localStorage.getItem('userEmail')
        const response = await axios.post<Career>(
        'https://careerwise-api.crossnox.dev/careers',
        careerData
        );

      if (true){//response.status === 201) {
        console.log("success")
        setShowSuccessModal(true);
        // Redirect to a success page or show a success message
        // You can use the 'Link' component or 'useNavigate' hook here
      } else {
        // Handle errors
      }
    } catch (error) {
      // Handle errors
    }

  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Upload Career
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={4}
              value={careerData.grad_profile}
              onChange={(event) =>
                setCareerData({
                  ...careerData,
                  grad_profile: event.target.value,
                })
              }
            />
          </Grid>
          {/* Submit button */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Upload
            </Button>
          </Grid>
        </Grid>
      </form>
      <Modal open={showSuccessModal} onClose={closeSuccessModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6">Career Uploaded Successfully!</Typography>
          <Typography>Your career has been successfully uploaded.</Typography>
        </Box>
      </Modal>

    </React.Fragment>
  );
};

export default UploadCareerForm;
