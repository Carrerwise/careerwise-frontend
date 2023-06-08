import React, { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text } from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';

import '../styles/Payment.css';
import { Header } from '../components/Header';
import axios, { AxiosRequestConfig } from 'axios';

const PaymentSuccessView: React.FC = () => {
  const navigate = useNavigate();
  
  function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  
  let query = useQuery()

  useEffect(() => {
    console.log(query.get('preference_id'))
    const postPaymentSuccess = async () => {
      try {
        const requestData: AxiosRequestConfig<any> = {
          method: 'POST',
          url: 'http://localhost:5000/payment/success',
          data: {
            preference_id: query.get('preference_id'),
            status: "success",
          },
        };
        await axios(requestData)
      } catch (err) {
          console.error(err)
      }
    }
    postPaymentSuccess();
    //console.log(`preference id: ${myVariable}`)
  }, [query]);

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
          <Button color="secondary" variant="contained" onClick={() => navigate('/results')}>Ver resultados</Button>
        </CardFooter>
      </Card>
    </div></>
  );
};

export default PaymentSuccessView;