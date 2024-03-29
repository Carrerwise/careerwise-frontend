import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Button from '@mui/material/Button';
import { format } from "date-fns";
import { TimePicker } from 'antd';
import { DataGrid } from '@mui/x-data-grid';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import '../styles/Modal.css';
import '../styles/TimePicker.css';

type TutorSlot = {
	date: Date,
	hour: Number,
	tutor_id: String,
	take: boolean,
	taken_by: any
};

const PsicoView: React.FC = () => {
    const psicoEmail = localStorage.getItem('psicoEmail');
    const [myDate, setDate] = useState<Date>(new Date());
    const [myHour, setHour] = useState(7);
    const [rows, setRows] = useState<any[]>([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleButtonClick = () => {
      setModalIsOpen(true);
    };

    const handleCloseModal = () => {
      setModalIsOpen(false);
    };

    const navigate = useNavigate();

    const columns = [
      //{ field: 'nombre', headerName: 'name', width: 150 },
      //{ field: 'email', headerName: 'Email', width: 200 },
      //{ field: 'edad', headerName: 'Edad', width: 70 },
      { field: 'fecha', headerName: 'Fecha', width: 200 },
      { field: 'horario', headerName: 'Horario', width: 70 },
      //{ field: 'ubicacion', headerName: 'Ubicacion', width: 210 },
      //{ field: 'estudioAlcanzado', headerName: 'Estudio Alcanzado', width: 210 },
    ];

    const getSlots = async () => {
        axios.get('https://careerwise-api.crossnox.dev/tutors/'+ psicoEmail +'/slots?available_only=true').then(function(responseData) {
			const rowsData = (responseData.data as TutorSlot[]).map((a) => {
				return {'fecha': a.date, 'horario': a.hour, 'id': `${a.date}::${a.hour}`}
			});
			setRows(rowsData);
        }).catch(function(err) {
			console.error(err);
		})
    };

    const createSlots = async () => {
      try {
        const hour = Number(myHour);
        const date = format(myDate, 'yyyy-MM-dd');
        const slotData = { date, hour };
        const responseData = await axios.post('https://careerwise-api.crossnox.dev/tutors/'+ psicoEmail +'/slots', slotData);
        //const responseData = await axios.post('https://careerwise-api.crossnox.dev/tutors/tutor1@example.com/slots', slotData);
        console.log(responseData);
        if (responseData.status === 201 ) {
          window.location.href = '/psico';
          handleButtonClick();
        } else {
          throw new Error('Create Slot Failed');
        }
      } catch (err) {
          console.error(err)
      }
    }

    const handleSubmit = async () => {
        try {
          createSlots();
        } catch (err) {
            console.error(err)
        }
    }

    const handleDate = (newValue: any) => {
      setDate(newValue);
    }

    const handleHour = (newValue: any) => {
      const val = Number(newValue.target.value);
      setHour(val);
    }

    const getBack = () => {
      navigate('/signin/psico')
    };

	useEffect(() => {
    	getSlots();
    }, []);

  return (
    <>
    <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', height: '40vh' }}>
        <h1>
          Dashboard de consultas
        </h1>
      <div style={{ height: 300, width: '25%', margin: 'auto' }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
      </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
        border: "1px solid"
      }}
    >
      <h1>Cargar nuevas consultas</h1>
      <div>
        <p>  Seleccione una fecha</p>
        <DatePicker minDate={new Date()} selected={myDate} onChange={handleDate} required />
      </div>
      <br></br>
        <p>Seleccione una horario</p>
      <br></br>
      <input type="number" min="0" max="23" value={myHour} onChange={handleHour} />
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
