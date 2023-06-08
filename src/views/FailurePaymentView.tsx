import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text } from '@chakra-ui/react';
import { FaExclamationCircle  } from 'react-icons/fa';

import '../styles/Payment.css';
import { Header } from '../components/Header';
import { MyContext } from '../components/MyContext';
import axios, { AxiosRequestConfig } from 'axios';

const PaymentFailureView: React.FC = () => {
  const navigate = useNavigate();
  let context = useContext(MyContext);
  const { myVariable, setMyVariable } = context;

  useEffect(() => {
    const postPaymentSuccess = async () => {
      try {
        console.log(myVariable)
        const requestData: AxiosRequestConfig<any> = {
          method: 'POST',
          url: 'http://localhost:5000/payment/success',
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
    console.log(context)

  }, [myVariable, navigate, context]);

  return (
    <><Header /><div className="view">
      <Card align="center" className="card">
        <CardHeader>
          <Heading as="h2" mt={30} mb={10} color={'black'}> ¡Hubo un error al realizar el pago! </Heading>
          <span style={{ color: 'red', fontSize: 33, margin: 10}}>
            <FaExclamationCircle  />
          </span>
        </CardHeader>
        <CardBody>
          <Text mt={20} mb={10}>El pago no se pudo realizar correctamente</Text>
          <Text mb={30}>Intente más tarde</Text>
        </CardBody>
        <CardFooter>
          <Button color="secondary" variant="contained" onClick={() => navigate('/result')}>Volver</Button>
        </CardFooter>
      </Card>
    </div></>
  );
};

export default PaymentFailureView;