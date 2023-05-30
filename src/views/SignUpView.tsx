import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Card, CardHeader, CardBody, CardFooter, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import Switch from '../components/Switch'
import Checkbox from '../components/Checkbox'
import SignUpInputs from 'src/interfaces/SignUpInputs';
import '../styles/Form.css';

const SignUpForm: React.FC = () => {
  const [canMove, setCanMove] = useState(false);
  const [modality, setModality] = useState<string>('');
  const [studiesType, setStudiesType] = useState<string>('');

  const [inputs, setInputs] = useState<SignUpInputs>({
    location: '',
    modality: '',
    canMove: false,
    studiesType: ''
  });
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    inputs.canMove = canMove;
    inputs.modality = modality;
    inputs.studiesType = studiesType;
    console.log('signUp:', inputs);
    //navigate('/test')
  };

  return (
    <div className="signup-container">
      <Card align="center" className="form-card">
        <CardHeader>
          <Heading className="form-title">Preguntas personales</Heading>
        </CardHeader>
        <CardBody>
          </CardBody>
          <form className="form">
          <div className="form-group">
            <label htmlFor="location">Ubicación</label>
            <input
              type="text"
              id="location"
              name="location"
              value={inputs.location}
              onChange={handleChange}
              className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="modality">Modalidad de estudio</label>
            <Checkbox label="Remoto" value={modality} setValue={setModality} />
            <Checkbox label="Presencial" value={modality} setValue={setModality} />
            <Checkbox label="Hibrido" value={modality} setValue={setModality} />
          </div>
          <div className="form-group">
            <label htmlFor="canMove">¿Tenes la posibilidad de mudarte para realizar tus estudios?</label>
            <Switch value={canMove} setValue={setCanMove} />
          </div>
          <div className="form-group">
            <label htmlFor="studiesType">¿Qué tipo de estudios estás buscando?</label>
            <Checkbox label="Universitario" value={studiesType} setValue={setStudiesType} />
            <Checkbox label="Terciario" value={studiesType} setValue={setStudiesType} />
            <Checkbox label="Curso" value={studiesType} setValue={setStudiesType} />
          </div>
        </form>
        <CardFooter>
          <Button color="secondary" variant="contained" onClick={handleSubmit}>Continuar</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUpForm;
