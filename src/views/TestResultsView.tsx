import React from 'react';

import TestResult from '../components/TestResults';
import ResultData from '../interfaces/ResultData';
import '../styles/Global.css'
import { Header } from '../components/Header';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';

const SurveyView: React.FC = () => {
  const navigate = useNavigate();

  const surveyData: ResultData[] = [
    {
      aptitudes: [
        { aptitude: 'Aptitud 1' },
        { aptitude: 'Aptitud 1' },
      ],
      interests: [
        { interest: 'Interes 1' },
        { interest: 'Interes 1' },
      ],
      careers: [
        { career: 'Carrera 1' },
        { career: 'Carrera 2' }, 
      ],
      institutions: [
        { institution: 'Universidad 1' },
        { institution: 'Universidad 2' }, 
      ]
    },
  ];
  
  const getBack = () => {
    navigate('/test')
  };
  
  return (
    <>
      <Header />
      <div className='container'>
        <h1>Resultados</h1>
        <TestResult data={surveyData} />
        <Button color="inherit" variant="contained" onClick={getBack}>Volver</Button>
      </div>
    </>
      );
};

export default SurveyView;
