import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import axios, { AxiosRequestConfig } from 'axios';
import Button from '@mui/material/Button';
import { Card, CardHeader, CardBody, CardFooter, Heading } from '@chakra-ui/react';

import Test from '../components/Test';
import '../styles/Form.css';
import { Header } from '../components/Header';
import { MyContext } from '../components/MyContext';

const TestView: React.FC = () => {
    const [questions, setQuestions] = useState([]);
    const [paymentUrl, setPaymentUrl] = useState("/");
    const context =  useContext(MyContext);
    const { myVariable, setMyVariable } = context;

    const [answers, setAnswers] = useState<boolean[]>(Array(98).fill(false));
    const navigate = useNavigate();
    console.log(`preference id: ${myVariable}`)
    useEffect(() => {
      const getQuestions = async () => {
        try {
            const resp = await axios.get('http://localhost:5000/demo/questions')
            setQuestions(resp.data)
        } catch (err) {
            console.error(err)
        }
      }
      getQuestions()
      const getPaymentUrl = async () => {
        try {
          const requestData: AxiosRequestConfig<any> = {
            method: 'POST',
            url: 'http://localhost:5000/payment',
            data: {
              payer_name: "fulano",
              payer_email: "fulano@gmail.com",
            },
          };
          const resp = await axios(requestData)
          setPaymentUrl(resp.data.payment_url)
          setMyVariable(resp.data.preference_id)
        } catch (err) {
            console.error(err)
        }
      }
      getPaymentUrl();
    }, [setMyVariable]);

  const saveAnswers = async () => {
    try {
      console.log('Submit test')
      for (var i = 0; i < answers.length; i++) {
        const requestData: AxiosRequestConfig<any> = {
          method: 'POST',
          url: 'http://localhost:5000/users/1/replies',
          data: {
            question_id: i + 1,
            reply: answers[i],
          },

        };
        await axios(requestData)
        navigate('/results')
      }
    } catch (err) {
      console.error(err)
    }
  }

  const handleSubmit = async () => {
    try {
      //saveAnswers();
    } catch (err) {
      console.error(err)
    }
  }

  const getBack = () => {
    navigate('/signup')
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
            <Link to={paymentUrl} style={{ textDecoration: 'none' }} target="_blank">
              <Button color="secondary" variant="contained" onClick={handleSubmit}>Finalizar</Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div></>
  );
};

export default TestView;
