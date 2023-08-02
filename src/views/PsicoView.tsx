import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Heading } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { format } from 'date-fns';
import { FaClock, FaTimes } from 'react-icons/fa';
import Dayjs from 'dayjs';
import { TimePicker } from 'antd';
import { DataGrid } from '@mui/x-data-grid';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import '../styles/Modal.css';
import '../styles/TimePicker.css';


const PsicoView: React.FC = () => {
    const psicoId = localStorage.getItem('psicoId');
    const psicoEmail = localStorage.getItem('psicoEmail');
    const [slots, setSlots] = useState<any[]>([]);
    const [date, setDate] = useState<Date | null>();
    const [hour, setHour] = useState();
    const [rows, setRows] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const minTime: Date = new Date("01/02/2021 00:00");
    const maxTime: Date = new Date("01/02/2021 23:59");

    const handleButtonClick = () => {
      setModalIsOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalIsOpen(false);
    };

    const navigate = useNavigate();

    useEffect(() => {
      getSlots();
      const rows = getRows();
    }, []);
 
    const columns = [
      { field: 'nombre', headerName: 'name', width: 150 },
      { field: 'email', headerName: 'Email', width: 200 },
      { field: 'edad', headerName: 'Edad', width: 70 },
      { field: 'fecha', headerName: 'Fecha', width: 110 },
      { field: 'horario', headerName: 'Horario', width: 70 },
      { field: 'ubicacion', headerName: 'Ubicacion', width: 210 },
      { field: 'estudioAlcanzado', headerName: 'Estudio Alcanzado', width: 210 },
    ];

    const getRows = () => {
      const row = [];
      for (let i = 0; i < slots.length; i++) {
        const jsonObj = {
          nombre:slots[i].taken_by.name,
          email:slots[i].taken_by.email,
          edad:slots[i].taken_by.age,
          fecha:slots[i].date,
          horario:slots[i].hour,
          ubicacion:slots[i].taken_by.location,
          estudioAlcanzado:slots[i].taken_by.last_finished_degree
        }
        row.push(jsonObj)
      }
      //setRows(row);
      return row;
    }

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
        //const date = format(date, 'yyyy-MM-dd')
        const slotData = { date, hour };
        const responseData = await axios.post('https://careerwise-api.crossnox.dev/tutors/'+ psicoId +'/slots', slotData);
        console.log(responseData);  
      } catch (err) {
          console.error(err)
      }
    }
    
    const handleSubmit = async () => {
        try {
          createSlots();
          handleButtonClick();
          //TODO:
        } catch (err) {
            console.error(err)
        }
    }

    const handleDate = (newValue: any) => {
      setDate(newValue);
    }

    const handleHour = (newValue: any) => {
      setHour(newValue);
    }

    const getBack = () => {
      navigate('/signin/psico')
    };

  return (
    <>
    <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', height: '40vh' }}>
        <h1>
          Dashboard de consultas
        </h1>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
      </div>
      {/*
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
          
          <tr>
            <td>NombreEjemplo</td>
            <td>Ejemplo@example.com</td>
            <td>25</td>
            <td>2023-07-29</td>
            <td>11</td>
            <td>Mendoza 2248</td>
            <td>primary_school</td>
          </tr>
          
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
      */}
    <br></br>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "40vh",
      }}
    >
      <h1>Cargar nuevas consultas</h1>
      <div>
        <p>  Seleccione una fecha</p>
        <DatePicker minDate={new Date()} selected={date} onChange={handleDate} required />
      </div>
      <br></br>
        <p>Seleccione una horario</p>
      <br></br>
        <TimePicker value={hour} onChange={handleHour} minuteStep={30} defaultValue={Dayjs('07:00', 'HH:mm')} format={'HH:mm'}/>
      <br></br>
      <br></br>
      <Button color="inherit" variant="contained" onClick={handleSubmit}> Cargar consulta </Button>
      <Modal className='my-modal' isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        <h2>Consulta cargada exitosamente !</h2>
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
      <br></br>
      <br></br>
      <br></br>
      <Button color="inherit" variant="contained" onClick={getBack}> Volver </Button>
    </div>;
  </>
  );
};

export default PsicoView;
