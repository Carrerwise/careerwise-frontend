import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import '../styles/Payment.css';
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
          url: 'https://careerwise-api.crossnox.dev/payment/failure',
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
  }, [navigate, query]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Payment Unsuccessful
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        We apologize, but there was an issue processing your payment.
      </Typography>
      <Button
        component={Link}
        to="/faculty" // Adjust the route to your faculty page
        variant="contained"
        color="primary"
        fullWidth
      >
        Back to Faculty Page
      </Button>
    </Container>
  );
};

export default PaymentFailureView;