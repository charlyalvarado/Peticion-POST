import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'; 

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Mis peticiones HTTP</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/consulta-alumnos">
                Consulta Alumnos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/crear-cursos">
                Crear Cursos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="#" aria-disabled="true">
                Login
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
