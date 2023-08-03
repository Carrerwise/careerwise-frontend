import React, { FormEvent, useState, useId } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'react-dropdown/style.css';


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
  location: string; 
  modality: string; //onsite, virtual, hybrid
  studies: string;
  bio: string;
  age: number;
}

const SignUpPsicoView: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    location: '',
    modality: '',
    studies: '',
    bio: '',
    age: 18
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    console.log(formData);
  };

  const handleChangeWithCast = (
    event: React.ChangeEvent<{ value: unknown; name?: string }>
  ) => {
    const { value, name } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name!]: value as string }));
  };

  const handleChangeWithCastInt = (
    event: React.ChangeEvent<{ value: unknown; name?: string }>
  ) => {
    const { value, name } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name!]: value as number }));
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
        localStorage.setItem('psicoEmail', formData.email);
        window.location.href = '/psico';

      } else {
        throw new Error('Signup failed');
      }
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  const ageInputId = useId();

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
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
          <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
          <InputLabel sx={{ marginRight: '8px' }}>Modality</InputLabel>
            <Select
                label="Modality"
                name="modality"
                value={formData.modality}
                onChange={(event) => handleChangeWithCast(event as React.ChangeEvent<{ value: unknown; name?: string }>)}
                required
                sx={{ flexGrow: 1 }}>
                <MenuItem value="virtual">Virtual</MenuItem>
                <MenuItem value="onsite">Onsite</MenuItem>
                <MenuItem value="hybrid">Hybrid</MenuItem>
            </Select>
          </Grid>
          <TextField
            label="Studies"
            name="studies"
            value={formData.studies}
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
          <TextField
            label="Bio"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
          <div style={{display: "flex", alignItems: "center"}}>
            <label htmlFor={ageInputId}>Age: </label>
            <input id={ageInputId} name="age" type="number" value={formData.age}
              onChange={handleInputChange} min={18} max={99} /> 
          </div>
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

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
        </SignUpForm>
      </Container>
    </Root>
  );
};

export default SignUpPsicoView;