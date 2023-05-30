import React from 'react';
import Question from 'src/interfaces/Question';
import TestSwitch from './TestSwitch';

interface TestProps {
    questions: Question[];
    answers: Array<boolean>;
    setAnswers: (answers: Array<boolean>) => void
}

const Test: React.FC<TestProps> = ({ questions, answers, setAnswers }) => {

    const handleAnswerUpdate = (idx: number, newValue: boolean) => {
      const updatedAnswers = [...answers]; 
      updatedAnswers[idx] = newValue; 
      setAnswers(updatedAnswers);
    };

  return (
      <div className="form-group">
          {questions.map((question, idx) => (
            <div key={question.id}>
                <label>{question.text}</label>
                <TestSwitch answers={answers} idx={idx} onAnswerUpdate={handleAnswerUpdate} />
            </div>
      ))}
      </div>
  );
};

export default Test;
