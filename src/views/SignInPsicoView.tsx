import React, { FormEvent, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router';
import axios, { AxiosRequestConfig } from 'axios';


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
  
const SingInPiscoView: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        const tutorData = { email, password };
        const responseData = await axios.post('https://careerwise-api.crossnox.dev/tutors/login', tutorData);
        console.log(responseData);
        localStorage.setItem('psicoId', responseData.data);
        localStorage.setItem('psicoEmail', email);

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
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
            />
            <Link to="/psico/profile" style={{ textDecoration: 'none' }}>      
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Sign In
              </Button>
            </Link>
          </LoginForm>
        </Container>
      </Root>
    );
};

export default SingInPiscoView;