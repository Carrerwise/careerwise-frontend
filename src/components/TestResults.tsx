import React from 'react';
import { Stack } from '@chakra-ui/react';

import ResultData from '../interfaces/ResultData';
import '../styles/TestResults.css';
import ResultItem from './ResultItem';

interface TestResultsProps {
  data: ResultData[];
}

const TestResults: React.FC<TestResultsProps> = ({ data }) => {
    return (
        <Stack spacing={4}>
          {data.map((result, index) => (
            <>
              <ResultItem idx={index} prop={result.aptitudes} label={'Aptitudes'}/>
              <ResultItem idx={index} prop={result.interests} label={'Intereses'}/>
              <ResultItem idx={index} prop={result.careers} label={'Carreras'} />
              <ResultItem idx={index} prop={result.institutions} label={'Instituciones'}/>
            </>
          ))}
        </Stack>
      );
};

export default TestResults;
