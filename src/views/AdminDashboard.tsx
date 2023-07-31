import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';

const useStyles = {
  root: {
    marginTop: 16,
  },
  paper: {
    padding: 16,
  },
  addButton: {
    marginTop: 16,
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column' as const, // Set flexDirection to a valid value
    gap: 16,
    width: '400px',
  },
  sidebar: {
    width: '200px',
    padding: '16px',
    backgroundColor: '#f0f0f0',
  },
  listItem: {
    marginBottom: '8px',
    cursor: 'pointer',
  },
};

interface Career {
  id: number;
  title: string;
  description: string;
}

const AdminDashboard: React.FC = () => {
    const [careers, setCareers] = useState<Career[]>([]);
    const [newCareer, setNewCareer] = useState<Career>({ id: 1, title: '', description: '' });
    const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);
  
    // Function to handle modification of a career
    const handleModifyCareer = (id: number) => {
      const selectedCareer = careers.find((career) => career.id === id);
      if (selectedCareer) {
        setSelectedCareer(selectedCareer);
      }
    };
  
    // Function to handle deletion of a career
    const handleDeleteCareer = (id: number) => {
      // Perform API call or any other logic to delete the career with the given id
      // After successfully deleting the career, update the careers state to remove the deleted career from the list
      const updatedCareers = careers.filter((career) => career.id !== id);
      setCareers(updatedCareers);
    };

  return (
    <Container style={useStyles.root}>
      <Grid container spacing={2}>
        {/* Sidebar */}
        <Grid item xs={12} md={3}>
          <Paper style={useStyles.sidebar}>
            <Typography variant="h6" gutterBottom>
              Dashboard
            </Typography>
            <List>
              <ListItem style={useStyles.listItem} button>
                <ListItemIcon>
                  <AddCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Add New Career" />
              </ListItem>
              <ListItem style={useStyles.listItem} button>
                <ListItemIcon>
                  <ListAltIcon />
                </ListItemIcon>
                <ListItemText primary="Existing Careers" />
              </ListItem>
              {/* Add more options as needed */}
            </List>
          </Paper>
        </Grid>
  
        {/* Main Content */}
        <Grid item xs={12} md={9}>
          <Paper style={useStyles.paper}>
            {/* Show the list of existing careers */}
            <Typography variant="h5" gutterBottom>
              Existing Careers
            </Typography>
            {careers.map((career) => (
              <div key={career.id} style={useStyles.formContainer}>
                <Typography variant="h6">{career.title}</Typography>
                <Typography>{career.description}</Typography>
                <Box display="flex" justifyContent="space-between">
                  <Button variant="contained" color="primary" onClick={() => handleModifyCareer(career.id)}>
                    Modify
                  </Button>
                  <Button variant="contained" color="secondary" onClick={() => handleDeleteCareer(career.id)}>
                    Delete
                  </Button>
                </Box>
              </div>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );   
};

export default AdminDashboard;

