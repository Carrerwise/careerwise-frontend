import React, { ChangeEvent, FormEvent, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Root = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    background: theme.palette.background.default,
    color: theme.palette.common.black,
  }));
  
  const LoginForm = styled('form')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    align: 'center',
    width: '100%',
    padding: theme.spacing(4),
    borderRadius: '8px',
    background: theme.palette.grey[100],
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  }));

  interface LoginData {
    email: string;
    password: string;
  }
    

const SingInPiscoView: React.FC = () => {
    const [tutorData, setTutorData] = useState<LoginData>({
      email: '',
      password: '',
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setTutorData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        const responseData = await axios.post('https://careerwise-api.crossnox.dev/tutors/login', tutorData);
        console.log(responseData);
        if (responseData.status === 200 ) {
          localStorage.setItem('psicoEmail', tutorData.email);
          window.location.href = '/psico';
        } else {
          throw new Error('SignIn Failed');
        }
      } catch (err) {
          console.error(err)
      }
    };
  
    return (
        <Root>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography variant="h4" align="center" gutterBottom>
            Psychologist Tutor Login
          </Typography>
          <LoginForm onSubmit={handleSubmit}>
            <TextField
              name="email"
              label="Email"
              type="email"
              value={tutorData.email}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              value={tutorData.password}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign In
            </Button>
            <Link to="/signup/psico" style={{  marginTop: 5,textDecoration: 'none', width: '100%' }}>
            <Button variant="outlined" color="primary" fullWidth>
              Sign Up
            </Button>
          </Link>
          </LoginForm>
        </Container>
      </Root>
    );
};

export default SingInPiscoView;