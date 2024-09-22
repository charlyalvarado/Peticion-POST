import React, { useState } from 'react';
import './crearCursos.css';
import axios from 'axios';

const CrearCursos = () => {
  const [curso, setCurso] = useState({
    nombre: '',
    creditos: '',
    descripcion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurso({
      ...curso,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://test-deploy-12.onrender.com/cursos', curso, {
        headers: {
          'Content-Type': 'application/json' 
        }
      });
      console.log('Curso creado:', response.data);
      alert('Curso creado exitosamente');
      // Limpiar el formulario después de crear el curso
      setCurso({ nombre: '', creditos: '', descripcion: '' });
    } catch (error) {
      console.error('Error al crear el curso:', error.response ? error.response.data : error.message);
      alert('Hubo un error al crear el curso');
    }
  };

  return (
    <div className="crearCursos">
      <h2>Crear Nuevo Curso</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre del Curso:</label>
          <input
            type="text"
            name="nombre"
            value={curso.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Créditos:</label>
          <input
            type="number"
            name="creditos"
            value={curso.creditos}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Descripción:</label>
          <textarea
            name="descripcion"
            value={curso.descripcion}
            onChange={handleChange}
            required
          />
        </div>

        <div className="button-group">
          <button type="submit" className="crear">Crear Curso</button>
          <button type="button" className="limpiar" onClick={() => setCurso({ nombre: '', creditos: '', descripcion: '' })}>Limpiar</button>
          <button type="button" className="cancelar">Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default CrearCursos;