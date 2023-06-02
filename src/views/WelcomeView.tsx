import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text } from '@chakra-ui/react';

import '../styles/WelcomeView.css';
import '../styles/Global.css'
import BackgroundAnimation from '../components/BackgroundAnimation';

const WelcomeView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <BackgroundAnimation />
      <div className="welcome-view">
        <h1 className="welcome-title">Bienvenido a Careerwise</h1>
        <Card align="center" className="main-card">
          <CardHeader>
            <Heading as="h3" mb={6}> Test vocacional</Heading>
          </CardHeader>
          <CardBody>
            <Text>Descubre cuál es tu vocación y encuentra el camino hacia tu futuro profesional</Text>
          </CardBody>
          <CardFooter>
            <Button color="secondary" variant="contained" onClick={() => navigate('/signup')}>Comenzar</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default WelcomeView;