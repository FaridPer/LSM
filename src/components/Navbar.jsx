// src/components/Navbar.tsx
import React from 'react';
import './Navbar.css';
import { SITE_BASE } from '../config';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg my-navbar">
      <div className="container">
        <a className="navbar-brand" href={SITE_BASE}><img src={`${SITE_BASE}`+'/logo2.svg'} alt="logo" /></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href={SITE_BASE}>Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`${SITE_BASE}`+'juegos'}>Juegos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`${SITE_BASE}`+'recursos'}>Recursos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`${SITE_BASE}`+'ejercicios'}>Ejercicios</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
