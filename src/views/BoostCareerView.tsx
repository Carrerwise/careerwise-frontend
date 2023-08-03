import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button, Card, CardContent } from '@mui/material';
import axios, { AxiosRequestConfig } from 'axios';
import { Link } from 'react-router-dom';

interface BoostCareerPageProps {
  careerId: string;
}


const BoostCareerPage: React.FC = () => {
    const [paymentUrl, setPaymentUrl] = useState("/");

    const { careerId } = useParams();
    const handleBoostCareer = () => {
    // Implement logic to initiate the payment process for boosting the specific career
    console.log(`Boosting career with ID: ${careerId}`);
    // Rest of the payment process...
  };

  useEffect(() => {
    const getPaymentUrl = async () => {
        try {
        const requestData: AxiosRequestConfig<any> = {
            method: 'POST',
            url: 'https://careerwise-api.crossnox.dev/payment',
            data: {
            payer_name: "fulano",
            payer_email: "fulano@gmail.com",
            },
        };
        const resp = await axios(requestData)
        setPaymentUrl(resp.data.payment_url)
        } catch (err) {
            console.error(err)
        }
    }
    getPaymentUrl();
  }, []);


  return (
    <Container maxWidth="md">
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Boost Your Career
          </Typography>
          <Typography variant="body1" paragraph>
            Boosting a career allows you to enhance the visibility of your
            career listing in search results. When you boost a career, it will appear higher in
            the search rankings, making it more likely for users to discover and engage with it.
          </Typography>
          <Typography variant="body1" paragraph>
            Boosting a career is a great way to attract more attention to your career listing
            and increase its chances of being noticed by potential students or applicants.
          </Typography>
          <Typography variant="body1" paragraph>
            To boost this career, simply click the button below and complete the payment process.
            Once the payment is confirmed, will be boosted
            for a specified period of time.
          </Typography>
          <Link to="/faculty" style={{  marginRight: 5, textDecoration: 'none' }}>
            <Button variant="outlined" color="primary">
                Go Back
            </Button>
          </Link>
          <Link to={paymentUrl} style={{ textDecoration: 'none' }} target="_blank">
            <Button variant="contained" color="primary" onClick={handleBoostCareer}>
                Boost Your Career
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Container>
  );
};

export default BoostCareerPage;

