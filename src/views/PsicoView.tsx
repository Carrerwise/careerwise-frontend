import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import axios, { AxiosRequestConfig } from 'axios';
import Button from '@mui/material/Button';
import { Card, CardHeader, CardBody, CardFooter, Heading } from '@chakra-ui/react';
import { Header } from '../components/Header';
import Test from '../components/Test';


const PsicoView: React.FC = () => {
    const psicoId = localStorage.getItem('psicoId');
    const psicoEmail = localStorage.getItem('psicoEmail');
    const [questions, setQuestions] = useState([]);

    const [answers, setAnswers] = useState<boolean[]>(Array(98).fill(false));
    const navigate = useNavigate();


    useEffect(() => {
        getAllQuestions();
    }, []);


    const getAllQuestions = async () => {
        try {
            const responseData = await axios.get('https://careerwise-api.crossnox.dev/questions');
            setQuestions(responseData.data);

        } catch (err) {
            console.error(err)   
        }
    }

    const saveAnswers = async () => {
        try {
          for (var i = 0; i < answers.length; i++) {
            const requestData: AxiosRequestConfig<any> = {
              method: 'POST',
              url: 'https://careerwise-api.crossnox.dev/users/1/replies',
              data: {
                question_id: i + 1,
                reply: answers[i],
              },
    
            };
            await axios(requestData)
          }
        } catch (err) {
          console.error(err)
        }
      }
    
    const handleSubmit = async () => {
        try {
            saveAnswers();
        } catch (err) {
            console.error(err)
        }
    }

    const getQuestions = async () => {
        try {
            const responseData = await axios.get('https://careerwise-api.crossnox.dev/users/'+ psicoEmail +'/replies');
            setQuestions(responseData.data);

        } catch (err) {
            console.error(err)
        }
    }

  const getBack = () => {
    navigate('/signin/psico')
  };

  return (
    <><Header /><div className="test-container">
    <Card align="center" className="test-form-card">
      <CardHeader>
        <Heading className="form-title">Test vocacional</Heading>
      </CardHeader>
      <CardBody>
        <Test questions={questions} answers={answers} setAnswers={setAnswers} />
      </CardBody>
      <CardFooter>
        <div className="button-container">
          <Button color="inherit" variant="contained" onClick={getBack}>Volver</Button>
        </div>
      </CardFooter>
    </Card>
  </div></>
);
};

export default PsicoView;
