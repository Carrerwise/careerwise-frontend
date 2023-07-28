import React, { FormEvent, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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

const SignUpFacultyAdmin: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    profilePicture: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Perform any image file handling or validation if needed
      setFormData((prevFormData) => ({ ...prevFormData, profilePicture: URL.createObjectURL(file) }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your sign-up logic here
    console.log(formData);
  };

  return (
    <Root>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Faculty Member Sign Up
        </Typography>
        <SignUpForm onSubmit={handleSubmit}>
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
          <input
            type="file"
            accept="image/*"
            id="profilePicture"
            name="profilePicture"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
          <label htmlFor="profilePicture">
            <Button variant="contained" color="primary" component="span">
              Upload Profile Picture
            </Button>
          </label>
          {formData.profilePicture && (
            <img src={formData.profilePicture} alt="Profile" style={{ width: '150px', height: '150px', marginTop: '16px' }} />
          )}
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '16px' }}>
            Sign Up
          </Button>
        </SignUpForm>
      </Container>
    </Root>
  );
};

export default SignUpFacultyAdmin;

