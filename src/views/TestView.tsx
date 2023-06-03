import React, { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
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
  
  const handleSubmit = async () => {
    try {
      console.log('Submit test')
      for (var i = 0; i < answers.length; i++) {
        const requestData: AxiosRequestConfig<any> = {
          method: 'POST',
          url: 'https://careerwise.crossnox.dev/users/1/replies',
          data: {
            question_id: 0,
            reply: answers[0],
          },
        };
        //const resp = await axios(requestData)
        //console.log(resp)
        navigate('/results')
      }
    } catch (err) {
        console.error(err)
    }
  }

    return (
        <div className="test-container">
        <Card align="center" className="test-form-card">
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
