import React from 'react';
import '../styles/WelcomeView.css';
import Header from '../components/Header';

const WelcomeView: React.FC = () => {
  return (
    <>
      <Header />
      <div className="welcome-view">
        <h1>Bienvenido a Careerwise</h1>
        <p>Descubre cuál es tu vocación y encuentra el camino hacia tu futuro profesional</p>
        <button type="submit" className="start-button">Comenzar</button>
      </div>
    </>
  );
};

export default WelcomeView;