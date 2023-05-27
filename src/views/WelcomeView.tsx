import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text } from '@chakra-ui/react';

import '../styles/WelcomeView.css';
import Header from '../components/Header';
import '../styles/Global.css'

const WelcomeView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="welcome-view">
        <h1>Bienvenido a Careerwise</h1>
        <Card align="center" className="main-card">
          <CardHeader>
            <Heading> Test vocacional</Heading>
          </CardHeader>
          <CardBody>
            <Text>Descubre cuál es tu vocación y encuentra el camino hacia tu futuro profesional</Text>
          </CardBody>
          <CardFooter>
            <Button color="secondary" variant="contained" onClick={() => navigate('/signup')}>Comenzar</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default WelcomeView;