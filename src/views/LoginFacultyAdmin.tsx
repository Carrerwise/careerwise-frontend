import React, { useState, ChangeEvent, FormEvent } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import axios from 'axios';


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
  
const LoginFacultyAdmin: React.FC = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/admins/login`,
        loginData
      );
      console.log(response); // Add this console log to see the response data in the browser's developer tools
      if (response.status === 200) {
        // Login successful, you can now redirect to a dashboard or home page
        const userEmail = response.data.email
        localStorage.setItem('userEmail', userEmail);
        window.location.href = '/faculty';
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  
  
  return (
    <Root>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Faculty Admin Login
        </Typography>
        <LoginForm onSubmit={handleSubmit}>
          <TextField
            type="email"
            name="email"
            label="Email"
            value={loginData.email}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
          />
          <TextField
            type="password"
            name="password"
            label="Password"
            value={loginData.password}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
          <Link to="/signup/faculty" style={{  marginTop: 5,textDecoration: 'none', width: '100%' }}>
          <Button variant="outlined" color="primary" fullWidth>
            Sign Up
          </Button>
        </Link>
        </LoginForm>
      </Container>
    </Root>
  );
};

export default LoginFacultyAdmin;