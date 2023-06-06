import '../styles/Header.scss'
import React from 'react';

export const Header = () => {

  return (
    <header className="header_container">
      <h1 className="header_title">Careerwise</h1>
      {/* <div className="header_link_container">
        <a className={`header_link ${location.pathname === "/" && "header_link_active"}`} href="/">
          Inicio
        </a>
      </div> */}
    </header>
  );
}