import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import psychologistImage from '../images/psychologist.png';
import facultyImage from '../images/faculty.jpeg';

const Root = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    background: theme.palette.background.default,
    color: theme.palette.common.black,
}));
  
const ImageContainer = styled(Link)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    textDecoration: 'none', // Remove default underline on the Link
    borderRadius: '8px', // Rounded corners with a value that creates a subtle roundness
    overflow: 'hidden',
    margin: theme.spacing(2, 0), // Add margin between the title and the images
    '&:hover': {
      transform: 'scale(1.05)',
    },
    '& img': {
      width: '200px',
      height: '200px',
      objectFit: 'cover', // Maintain the square shape and cover the container
      borderRadius: '8px', // Match the parent's borderRadius for a consistent look
      transition: 'transform 0.3s ease',
      filter: 'grayscale(100%)', // Make the images grey initially
    },
    '&:hover img': {
      filter: 'grayscale(0%)', // Remove the grey effect on hover
    },
    '& h6': {
      marginTop: theme.spacing(1),
      transition: 'transform 0.3s ease',
    },
}));
  
  
const RoleSelectionPage = () => {
    return (
      <Root>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography variant="h4" align="center" gutterBottom>
            Seleccione su rol:
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={6}>
              <ImageContainer to="/signin/psico">
                <img src={psychologistImage} alt="Psychologist" />
                <Typography variant="h6" align="center" gutterBottom>
                  Psicologo
                </Typography>
              </ImageContainer>
            </Grid>
            <Grid item xs={6}>
              <ImageContainer to="/signup/faculty">
                <img src={facultyImage} alt="Faculty Staff" />
                <Typography variant="h6" align="center" gutterBottom>
                  Administrador de Facultad
                </Typography>
              </ImageContainer>
            </Grid>
          </Grid>
        </Container>
      </Root>
    );
};

export default RoleSelectionPage;