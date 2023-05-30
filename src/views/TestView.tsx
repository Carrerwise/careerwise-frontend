import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Card, CardHeader, CardBody, CardFooter, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import Test from '../components/Test';
import '../styles/Form.css';

const TestView: React.FC = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState<boolean[]>(Array(98).fill(false));
    const navigate = useNavigate();

    useEffect(() => {
      const getQuestions = async () => {
        try {
            const resp = await axios.get('https://careerwise.crossnox.dev/questions')
            console.log(resp.data)
            setQuestions(resp.data)
        } catch (err) {
            console.error(err)
        }
      }
      getQuestions()
    }, []);
  
    const handleSubmit = () => {
      console.log('Submit test')
      console.log(answers)
      navigate('/results')
    }

    return (
        <div className="test-container">
        <Card align="center" className="form-card">
          <CardHeader>
            <Heading className="form-title">Test vocacional</Heading>
          </CardHeader>
          <CardBody>
                <Test questions={questions} answers={answers} setAnswers={setAnswers} />
          </CardBody>
          <CardFooter>
            <Button color="secondary" variant="contained" onClick={handleSubmit}>Finalizar</Button>
          </CardFooter>
        </Card>
      </div>
  );
};

export default TestView;
