import React from 'react';

import SurveyResults from '../components/TestResults';
import { SurveyData } from '../interfaces/ResultData';
import '../styles/Global.css'

const SurveyView: React.FC = () => {
    const surveyData: SurveyData[] = [
        {
          career: 'Carrera 1',
          options: [
            { institution: 'Universidad 1' },
            { institution: 'Universidad 2' },
          ],
        },
        {
          career: 'Carrera 2',
          options: [
            { institution: 'Universidad 3' },
            { institution: 'Universidad 4' },
          ],
      },
      {
        career: 'Carrera 3',
        options: [
          { institution: 'Universidad 1' },
        ],
      },
      ];
    
      return (
        <div className='container'>
          <h1>Resultados</h1>
          <SurveyResults data={surveyData} />
        </div>
      );
};

export default SurveyView;
