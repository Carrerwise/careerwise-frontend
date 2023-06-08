import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text } from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';

import '../styles/Payment.css';
import { Header } from '../components/Header';
import { MyContext } from '../components/MyContext';
import axios, { AxiosRequestConfig } from 'axios';

const PaymentSuccessView: React.FC = () => {
  const navigate = useNavigate();
  let context = useContext(MyContext);
  const { myVariable, setMyVariable } = context;

  useEffect(() => {
    const postPaymentSuccess = async () => {
      try {
        console.log(myVariable)
        const requestData: AxiosRequestConfig<any> = {
          method: 'POST',
          url: 'https://careerwise-api.crossnox.dev/payment/success',
          data: {
            preference_id: myVariable,
            status: "success",
          },
        };
        await axios(requestData)
        navigate("/results")
      } catch (err) {
          console.error(err)
      }
    }
    //postPaymentSuccess();
    console.log(`preference id: ${myVariable}`)
  }, [myVariable, navigate, context]);

  return (
    <><Header /><div className="view">
      <Card align="center" className="card">
        <CardHeader>
          <Heading as="h2" mt={30} mb={10} color={'black'}> ¡Pago éxitoso! </Heading>
          <span style={{ color: 'green', fontSize: 30, margin: 10}}>
            <FaCheck />
          </span>
        </CardHeader>
        <CardBody>
          <Text mt={30} mb={60}>¿Qué estas esperando para ver los resultados?</Text>
        </CardBody>
        <CardFooter>
          <Button color="secondary" variant="contained" onClick={() => navigate('/result')}>Ver resultados</Button>
        </CardFooter>
      </Card>
    </div></>
  );
};

export default PaymentSuccessView;