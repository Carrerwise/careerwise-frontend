import React, { FormEvent, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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

const SignUpForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  padding: theme.spacing(4),
  borderRadius: '8px',
  background: theme.palette.grey[100],
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
}));

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignUpFacultyAdmin: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/admins/`,
        formData
      );
      console.log(response); // Add this console log to see the response data in the browser's developer tools
      if (response.status === 201) {
        // Signup successful, you can now redirect to a success page or login page
        const userEmail = response.data.email
        localStorage.setItem('userEmail', userEmail);
        window.location.href = '/faculty';
      } else {
        throw new Error('Signup failed');
      }
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <Root>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Faculty Member Sign Up
        </Typography>
        <SignUpForm onSubmit={handleSignUp}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            type="email"
            required
            fullWidth
          />
          <TextField
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            type="password"
            required
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '16px' }}>
            Sign Up
          </Button>
        </SignUpForm>
      </Container>
    </Root>
  );
};

export default SignUpFacultyAdmin;