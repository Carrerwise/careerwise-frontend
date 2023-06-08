import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text } from '@chakra-ui/react';
import { FaExclamationCircle  } from 'react-icons/fa';

import '../styles/Payment.css';
import { Header } from '../components/Header';
import axios, { AxiosRequestConfig } from 'axios';

const PaymentFailureView: React.FC = () => {
  const navigate = useNavigate();

  function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  
  let query = useQuery()

  useEffect(() => {
    const postPaymentFailure = async () => {
      try {
        const requestData: AxiosRequestConfig<any> = {
          method: 'POST',
          url: 'http://localhost:5000/payment/failure',
          data: {
            preference_id: query.get('preference_id'),
          },
        };
        await axios(requestData)
      } catch (err) {
          console.error(err)
      }
    }
    postPaymentFailure();
  }, [navigate]);

  return (
    <><Header /><div className="view">
      <Card align="center" className="card">
        <CardHeader>
          <Heading as="h2" color={'black'}> ¡Error al realizar el pago! </Heading>
          <span style={{ color: 'red', fontSize: 33, margin: 10}}>
            <FaExclamationCircle  />
          </span>
        </CardHeader>
        <CardBody>
          <Text>El pago no se pudo realizar correctamente</Text>
          <Text>Intente más tarde</Text>
        </CardBody>
        <CardFooter>
          <Button color="secondary" variant="contained" onClick={() => navigate('/')}>Volver</Button>
        </CardFooter>
      </Card>
    </div></>
  );
};

export default PaymentFailureView;