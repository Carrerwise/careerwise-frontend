import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text } from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';

import '../styles/WelcomeView.css';
import AnimatedBackground from '../components/Background';

const WelcomeView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <AnimatedBackground />
      <div className="welcome-view">
        <Fade>
          <h1 className="welcome-title">Bienvenido a Careerwise</h1>
        </Fade>
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