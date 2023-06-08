import React, { useEffect, useState } from 'react';

import ResultData from '../interfaces/ResultData';
import { Header } from '../components/Header';
import ResultItem from '../components/ResultItem';
import '../styles/TestResults.css';
import axios from 'axios';

const SurveyView: React.FC = () => {
  const surveyData: ResultData = 
    {
      interests: {
        name: "Administrativas y contables",
        activity: "Es una persona que se interesa por actividades afines a la supervisión, el orden, organización, análisis y síntesis, colaboración y cálculo. Estas carreras requieren de aptitudes tales como: ser persuasivo, objetivo, práctico, responsable, tolerante y ambicioso."
      },
      aptitudes: {
        name: "Ingenierías, carreras técnicas y computación",
        aptitude: "Aptitudes que se destaca: preciso, práctico, crítico, analítico y rígido. Actividades que tengan que ver con: cálculo, cientifico, manual, exacto y planificacion."
      },
      careers: [
        {
          chaside_letter: "I",
          name: "Ingeniería en Informática",
          institution: "Universidad de Buenos Aires",
          city: "Buenos Aires",
          type: "Presencial",
          academy_level: "Universitario"
        }
      ]
  };
  
  const [results, setResults] = useState<ResultData>(surveyData);

  useEffect(() => {
    const getResults = async () => {
      try {
        const resp = await axios.get('https://careerwise-api.crossnox.dev/chaside/1')
        console.log(resp)
        setResults(resp.data)
      } catch (err) {
          console.error(err)
      }
    }
    getResults()
  }, [setResults]);
  
  return (
    <>
      <Header />
      <div className="results-container">
        <h1 className='title'>Resultados</h1>
        <ResultItem prop={results.interests} label={'Intereses'}/>
        <ResultItem prop={results.aptitudes} label={'Aptitudes'} />
        <ResultItem prop={results.careers[0]} label={'Carrera'}/>
      </div>
    </>
      );
};

export default SurveyView;
