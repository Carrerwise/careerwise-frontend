import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Card, CardHeader, CardBody, CardFooter, Heading } from '@chakra-ui/react';

import '../styles/SignUpForm.css';
import { Modality } from 'src/enums/Modality';
import CanMoveSwitch from '../components/CanMoveSwitch'

interface User {
  location: string;
  modality: Modality;
  can_move: string;
}

const SignUpForm: React.FC = () => {
  const [user, setUser] = useState<User>({
    location: '',
    modality: Modality.Remote,
    can_move: ''
  });

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(user);
  };

  const [canMove, setCanMove] = useState(false);

  return (
    <div className="signup-container">
      <Card align="center" className="main-card">
        <CardHeader>
          <Heading> Preguntas personales </Heading>
        </CardHeader>
        <CardBody>
          </CardBody>
          <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="location">Ubicación</label>
            <input
              type="text"
              id="location"
              name="location"
              value={user.location}
              onChange={handleChange}
              className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="modality">Modalidad de estudio</label>
                <label className="checkbox-label">
                <input
                  type="checkbox"
                  value={user.modality}
                  onChange={handleChange}
                />
                Remoto
                </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value={user.modality}
                  onChange={handleChange}
                />
                Presencial
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value={user.modality}
                  onChange={handleChange}
                />
                Hibrido
              </label>
          </div>
          <div className="form-group">
            <label htmlFor="can_move">¿Tenes la posibilidad de mudarte para realizar tus estudios?</label>
            <CanMoveSwitch canMove={canMove} setCanMove={setCanMove} />
          </div>
        </form>
        <CardFooter>
          <Button color="secondary" variant="contained">Continuar</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUpForm;
