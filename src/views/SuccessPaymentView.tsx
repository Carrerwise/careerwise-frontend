import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text } from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';

import '../styles/Payment.css';
import { Header } from '../components/Header';
import axios, { AxiosRequestConfig } from 'axios';

const PaymentSuccessView: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const postPaymentSuccess = async () => {
      try {
        const requestData: AxiosRequestConfig<any> = {
          method: 'POST',
          url: 'http://localhost:5000/payment/success',
          data: {
            preference_id: '',
            status: "success",
          },
        };
        await axios(requestData)
        navigate("/results")
      } catch (err) {
          console.error(err)
      }
    }
    postPaymentSuccess();
  }, [navigate]);

  return (
    <><Header /><div className="view">
      <Card align="center" className="card">
        <CardHeader>
          <Heading as="h2" color={'black'}> ¡Pago éxitoso! </Heading>
          <span style={{ color: 'green', fontSize: 30, margin: 10}}>
            <FaCheck />
          </span>
        </CardHeader>
        <CardBody>
          <Text >¿Qué estas esperando para ver los resultados?</Text>
        </CardBody>
        <CardFooter>
          <Button color="secondary" variant="contained" onClick={() => navigate('/result')}>Ver resultados</Button>
        </CardFooter>
      </Card>
    </div></>
  );
};

export default PaymentSuccessView;