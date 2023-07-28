import React, { FormEvent } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

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
  
const LoginFacultyAdmin: React.FC = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // Add your login logic here
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
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoFocus
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
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
