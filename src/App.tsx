import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import ConsultaAlumnos from './consultaAlumnos';
import CrearCursos from './crearCursos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/consulta-alumnos" element={<ConsultaAlumnos />} />
          <Route path="/crear-cursos" element={<CrearCursos />} />
          <Route path="/" element={<h1>Bienvenido a mi pagina</h1>} /> {/* Home Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
