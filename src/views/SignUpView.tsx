import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Card, CardHeader, CardBody, CardFooter, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import Switch from '../components/Switch'
import Checkbox from '../components/Checkbox'
import { Modality } from 'src/enums/Modality';
import { StudiesType } from 'src/enums/StudiesType';
import SignUpInputs from 'src/interfaces/SignUpInputs';
import '../styles/Form.css';

const SignUpForm: React.FC = () => {
  const [canMove, setCanMove] = useState(false);
  const [remote, setRemote] = useState(false);
  const [faceToFace, setFaceToFace] = useState(false);
  const [hybrid, setHybrid] = useState(false);
  const [university, setUniversity] = useState(false);
  const [tertiary, setTertiary] = useState(false);
  const [course, setCourse] = useState(false);

  const [inputs, setInputs] = useState<SignUpInputs>({
    location: '',
    modality: Modality.Remote,
    canMove: false,
    studiesType: StudiesType.University
  });
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (remote) {
      inputs.modality = Modality.Remote
    } else if (faceToFace) {
      inputs.modality = Modality.FaceToFace
    } else {
      inputs.modality = Modality.Hybrid
    }
    inputs.canMove = canMove
    if (university) {
      inputs.studiesType = StudiesType.University
    } else if (tertiary) {
      inputs.studiesType = StudiesType.Tertiary
    } else {
      inputs.studiesType = StudiesType.Course
    }
    console.log('signUp:', inputs);
    navigate('/test')
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
            <Checkbox label="Remoto" value={remote} setValue={setRemote} />
            <Checkbox label="Presencial" value={faceToFace} setValue={setFaceToFace} />
            <Checkbox label="Hibrido" value={hybrid} setValue={setHybrid} />
          </div>
          <div className="form-group">
            <label htmlFor="canMove">¿Tenes la posibilidad de mudarte para realizar tus estudios?</label>
            <Switch value={canMove} setValue={setCanMove} />
          </div>
          <div className="form-group">
            <label htmlFor="studiesType">¿Qué tipo de estudios estás buscando?</label>
            <Checkbox label="Universitario" value={university} setValue={setUniversity} />
            <Checkbox label="Terciario" value={tertiary} setValue={setTertiary} />
            <Checkbox label="Curso" value={course} setValue={setCourse} />
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
