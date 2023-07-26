import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(4),
  textShadow: `1px 1px 3px rgba(0, 0, 0, 0.3)`,
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const GetStartedButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  color: theme.palette.common.white,
  borderColor: theme.palette.common.white,
}));

const LandingPage = () => {
  return (
    <Root>
      <CssBaseline />
      <Container maxWidth="sm">
        <Title variant="h1">
          Careerwise
        </Title>
        <SubTitle variant="h5">
          Descubre cuál es tu vocación y encuentra el camino hacia tu futuro profesional
        </SubTitle>
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <GetStartedButton variant="outlined">
            Comenzar
          </GetStartedButton>
        </Link>      
        </Container>
    </Root>
  );
};

export default LandingPage;