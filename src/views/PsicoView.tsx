import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Heading } from '@chakra-ui/react';
import { Header } from '../components/Header';


const PsicoView: React.FC = () => {
    const psicoId = localStorage.getItem('psicoId');
    const psicoEmail = localStorage.getItem('psicoEmail');
    const [slots, setSlots] = useState<any[]>([]);
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('10:00');

    const navigate = useNavigate();

    useEffect(() => {
      getSlots();
    }, []);
 
    const getSlots = async () => {
      try {
        const responseData = await axios.get('https://careerwise-api.crossnox.dev/tutors/'+ psicoId +'/slots');
        //const responseData = await axios.get('https://careerwise-api.crossnox.dev/tutors/1/slots');
        setSlots(responseData.data);

      } catch (err) {
        console.error(err)   
      }
    }

    const createSlots = async () => {  
      try {
        const slotData = { date, hour };
        const responseData = await axios.post('https://careerwise-api.crossnox.dev/tutors/'+ psicoId +'/slots', slotData);
        console.log(responseData);  
      } catch (err) {
          console.error(err)
      }
    }
    
    const handleSubmit = async () => {
        try {
          //TODO:
        } catch (err) {
            console.error(err)
        }
    }

  const getBack = () => {
    navigate('/signin/psico')
  };

  return (
    <><Header /><div className="test-container">
        <Heading as='h2' size='2xl'>
          Dashboard de consultas
        </Heading>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Edad</th>
            <th>Fecha</th>
            <th>Horario</th>
            <th>Ubicacion</th>
            <th>Estudio Alcanzado</th>
          </tr>
        </thead>
        <tbody>
          {/*
          <tr>
            <td>NombreEjemplo</td>
            <td>Ejemplo@example.com</td>
            <td>25</td>
            <td>2023-07-29</td>
            <td>11</td>
            <td>Mendoza 2248</td>
            <td>primary_school</td>
          </tr>
          */}
            {slots.map((item) => (
            <tr key={item.id}>
            <td>{item.taken_by.name}</td>
            <td>{item.taken_by.email}</td>
            <td>{item.taken_by.age}</td>
            <td>{item.date}</td>
            <td>{item.hour}</td>
            <td>{item.taken_by.location}</td>
            <td>{item.taken_by.last_finished_degree}</td>
          </tr>
          ))}
        </tbody>
      </table>
      <Button color="inherit" variant="contained" onClick={getBack}>Volver</Button>
      <br></br>
      
  </div></>
);
};

export default PsicoView;
