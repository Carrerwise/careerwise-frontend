import '../styles/Header.scss'
import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {

  return (
    <header className="header_container">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 className="header_title">Careerwise</h1>
      </Link>
    </header>
  );
}