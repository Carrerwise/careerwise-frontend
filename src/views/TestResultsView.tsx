import React from 'react';

import TestResult from '../components/TestResults';
import ResultData from '../interfaces/ResultData';
import '../styles/Global.css'
import { Header } from '../components/Header';

const SurveyView: React.FC = () => {
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
    
  return (
        <><Header /><div className='container'>
      <h1>Resultados</h1>
      <TestResult data={surveyData} />
    </div></>
      );
};

export default SurveyView;
