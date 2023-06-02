import React, { useState } from 'react';
import { Pagination } from '@mui/material';

import Question from '../interfaces/Question';
import TestSwitch from './TestSwitch';
import '../styles/Global.css';
import '../styles/Form.css'

interface TestProps {
    questions: Question[];
    answers: Array<boolean>;
    setAnswers: (answers: Array<boolean>) => void
}

const Test: React.FC<TestProps> = ({ questions, answers, setAnswers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = questions.slice(startIndex, endIndex);

    const handleAnswerUpdate = (idx: number, newValue: boolean) => {
      const updatedAnswers = [...answers]; 
      updatedAnswers[idx] = newValue; 
      setAnswers(updatedAnswers);
    };

  return (
    <>
      <div className='questions-container'>
        {displayedData.map((question, idx) => (
          <div key={question.id}>
            <label className='test-label'>{idx+1}. {question.text}</label>
            <TestSwitch answers={answers} idx={idx} onAnswerUpdate={handleAnswerUpdate} />
          </div>
        ))}
      </div>
      <div className="test-pagination">
        <Pagination
          count={Math.ceil(questions.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange} />
      </div>
    </>
  );
};

export default Test;
