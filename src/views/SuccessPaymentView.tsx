import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import '../styles/Payment.css';
import axios, { AxiosRequestConfig } from 'axios';

const PaymentSuccessView: React.FC = () => {
  
  function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  
  let query = useQuery()

  useEffect(() => {
    const postPaymentSuccess = async () => {
      try {
        const requestData: AxiosRequestConfig<any> = {
          method: 'POST',
          url: 'https://careerwise-api.crossnox.dev/payment/success',
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
  }, [query]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Thank you for your payment!
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Your career boosting has been successfully processed.
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

export default PaymentSuccessView;