import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

const gridStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '16px',
    borderRadius: '8px',
  };

interface Career {
  id: number;
  name: string;
  institution: string;
  modality: string;
  duration: number;
  duration_unit: string;
  presentation_year: number;
  main_location: string;
  grad_profile: string;
  academic_level: string;
  private: boolean;
  chaside_letter: string;
}

const UploadCareerForm: React.FC = () => {
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [careerData, setCareerData] = React.useState<Career>({
    id: 0,
    name: '',
    institution: '',
    modality: '',
    duration: 0,
    duration_unit: '',
    presentation_year: 0,
    main_location: '',
    grad_profile: '',
    academic_level: '',
    private: false,
    chaside_letter: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setCareerData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(careerData)
    try {
        const userEmail = localStorage.getItem('userEmail')
        const response = await axios.post<Career>(
            `https://careerwise-api.crossnox.dev/admins/${userEmail}/careers`,
            careerData
        );

      if (response.status === 201){
        setShowSuccessModal(true);
      } else {
        openErrorModal('An error occurred while creating the career.');
    }
    } catch (error) {
        openErrorModal('An error occurred while creating the career.');
    }
  };


  const handleChangeWithCast = (
    event: React.ChangeEvent<{ value: unknown; name?: string }>
  ) => {
    const { value, name } = event.target;
    setCareerData((prevData) => ({ ...prevData, [name!]: value as string }));
  };
  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setCareerData((prevData) => ({ ...prevData, [name]: value === 'true' }));
  };
  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

    const [showErrorModal, setShowErrorModal] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');

    const openErrorModal = (message: string) => {
    setErrorMessage(message);
    setShowErrorModal(true);
    };

    const closeErrorModal = () => {
    setShowErrorModal(false);
    };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Upload Career
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <Grid container spacing={2} style={gridStyle}>
        <Grid item xs={12} sm={6} md={4}>
            <TextField
                label="Career Name"
                variant="outlined"
                name="name"
                value={careerData.name}
                onChange={handleInputChange}
                required
                fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
                label="Institution"
                variant="outlined"
                name="institution"
                value={careerData.institution}
                onChange={handleInputChange}
                required
                fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
          <InputLabel sx={{ marginRight: '8px' }}>Modality</InputLabel>
            <Select
                label="Modality"
                name="modality"
                value={careerData.modality}
                onChange={(event) => handleChangeWithCast(event as React.ChangeEvent<{ value: unknown; name?: string }>)} // Cast the event type here
                required
                sx={{ flexGrow: 1 }}
            >
                <MenuItem value="virtual">Virtual</MenuItem>
                <MenuItem value="onsite">Onsite</MenuItem>
                <MenuItem value="hybrid">Hybrid</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
                label="Duration"
                fullWidth
                multiline
                variant="outlined"
                type="number"
                name="duration"
                value={careerData.duration}
                onChange={handleInputChange}
                required
            />
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <InputLabel sx={{ marginRight: '8px' }}>Duration Unit</InputLabel>
            <Select
                label="Duration Unit"
                name="duration_unit"
                value={careerData.duration_unit}
                onChange={(event) =>
                    handleChangeWithCast(event as React.ChangeEvent<{ value: unknown; name?: string }>)
                }
                required
                sx={{ flexGrow: 1 }}
            >
                <MenuItem value="week">Week</MenuItem>
                <MenuItem value="month">Month</MenuItem>
                <MenuItem value="semester">Semester</MenuItem>
                <MenuItem value="year">Year</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
                label="Presentation Year"
                fullWidth
                type="number"
                value={careerData.presentation_year}
                name="presentation_year"
                onChange={handleInputChange}
                required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
                label="Main Location"
                fullWidth
                multiline
                rows={4}
                value={careerData.main_location}
                onChange={handleInputChange}
                name="main_location"
            />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <TextField
                label="Graduation Profile"
                fullWidth
                multiline
                rows={4}
                value={careerData.grad_profile}
                onChange={handleInputChange}
                name="grad_profile"
            />
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                <InputLabel sx={{ marginRight: '8px' }}>Academic Level</InputLabel>
                <Select
                label="Academic Level"
                name="academic_level"
                value={careerData.academic_level}
                onChange={(event) =>
                    handleChangeWithCast(event as React.ChangeEvent<{ value: unknown; name?: string }>)
                }
                required
                sx={{ flexGrow: 1 }}
                >
                <MenuItem value="Primaria">Primaria</MenuItem>
                <MenuItem value="Secundaria">Secundaria</MenuItem>
                <MenuItem value="Terciario">Terciario</MenuItem>
                <MenuItem value="Universitario">Universitario</MenuItem>
                <MenuItem value="Bootcamp">Bootcamp</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <InputLabel sx={{ marginRight: '8px' }}>Type of institution</InputLabel>
                <RadioGroup
                    row
                    name="private"
                    value={careerData.private.toString()}
                    onChange={handleRadioChange}
                    sx={{ flexGrow: 1 }}
                >
                    <FormControlLabel value="false" control={<Radio />} label="Public" />
                    <FormControlLabel value="true" control={<Radio />} label="Private" />
                </RadioGroup>
            </Grid>

            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                <InputLabel sx={{ marginRight: '8px' }}>Chaside Letter</InputLabel>
                <Select
                    label="Chaside Letter"
                    name="chaside_letter"
                    value={careerData.chaside_letter}
                    onChange={(event) => handleChangeWithCast(event as React.ChangeEvent<{ value: unknown; name?: string }>)} // Cast the event type here
                    required
                    sx={{ flexGrow: 1 }}
                >
                    <MenuItem value="C">C</MenuItem>
                    <MenuItem value="H">H</MenuItem>
                    <MenuItem value="A">A</MenuItem>
                    <MenuItem value="S">S</MenuItem>
                    <MenuItem value="I">I</MenuItem>
                    <MenuItem value="D">D</MenuItem>
                    <MenuItem value="E">E</MenuItem>
                </Select>
            </Grid>
          {/* Submit button */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Upload
            </Button>
          </Grid>
        </Grid>
      </form>
      <Modal open={showSuccessModal} onClose={closeSuccessModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6">Career Uploaded Successfully!</Typography>
          <Typography>Your career has been successfully uploaded.</Typography>
        </Box>
      </Modal>
      <Modal open={showErrorModal} onClose={closeErrorModal}>
        <Box
            sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            }}
        >
            <Typography variant="h6">Error</Typography>
            <Typography color="error">{errorMessage}</Typography>
            <Button variant="contained" color="primary" onClick={closeErrorModal}>
            Close
            </Button>
        </Box>
      </Modal>

    </React.Fragment>
  );
};

export default UploadCareerForm;
