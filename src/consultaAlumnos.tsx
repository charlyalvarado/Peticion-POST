import React, { useState } from 'react';
import './consultaAlumnos.css'; 

const ConsultaAlumnos = () => {
  const [carnet, setCarnet] = useState('');
  const [nombres, setNombres] = useState('');
  const [correo, setCorreo] = useState('');
  const [seccion, setSeccion] = useState('');

  const handleBuscar = async () => {
    console.log('Buscando estudiante con carnet:', carnet); 
    try {
      const response = await fetch(`https://test-deploy-12.onrender.com/estudiantes/${carnet}`);
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
      const data = await response.json();
      
      // Busca el estudiante por el carnet
      const estudiante = data.find(est => est.Carné === carnet || est.Carnet === carnet);
      
      if (estudiante) {
        setNombres(estudiante.Estudiante || '');
        setCorreo(estudiante.Email || '');
        setSeccion(estudiante.Sección || estudiante.Seccion || '');
      } else {
        console.error('Estudiante no encontrado');
        setNombres('');
        setCorreo('');
        setSeccion('');
      }
    } catch (error) {
      console.error('Error al buscar el estudiante:', error);
    }
  };

  const handleLimpiar = () => {
    setCarnet('');
    setNombres('');
    setCorreo('');
    setSeccion('');
  };

  const handleCancelar = () => {
    console.log('Acción de cancelar');
  };

  return (
    <div className="consulta-alumnos">
      <h2>Consulta de alumnos</h2>
      <div className="form-group">
        <label>Carnet:</label>
        <input 
          type="text" 
          value={carnet} 
          onChange={(e) => setCarnet(e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label>Nombres:</label>
        <input 
          type="text" 
          value={nombres} 
          readOnly 
        />
      </div>
      <div className="form-group">
        <label>Correo Electrónico:</label>
        <input 
          type="text" 
          value={correo} 
          readOnly 
        />
      </div>
      <div className="form-group">
        <label>Sección:</label>
        <input 
          type="text" 
          value={seccion} 
          readOnly 
        />
      </div>
      <div className="button-group">
        <button 
          onClick={handleBuscar} 
          className="buscar"
        >
          Buscar
        </button>
        <button 
          onClick={handleLimpiar} 
          className="limpiar"
        >
          Limpiar
        </button>
        <button 
          onClick={handleCancelar} 
          className="cancelar"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default ConsultaAlumnos;