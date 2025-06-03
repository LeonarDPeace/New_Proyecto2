import React, { useState } from 'react';
import './TarjetaLibro.css';

const TarjetaLibro = ({ libro, onPrestar, onAgregarListaEspera, mostrarBotonDevolver = false }) => {
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState('');

  const handlePrestar = () => {
    if (usuarioSeleccionado) {
      onPrestar(libro, usuarioSeleccionado);
      setUsuarioSeleccionado('');
    }
  };

  const handleAgregarListaEspera = () => {
    if (usuarioSeleccionado) {
      onAgregarListaEspera(libro, usuarioSeleccionado);
      setUsuarioSeleccionado('');
    }
  };

  return (
    <div className="tarjeta-libro">
      <div className="tarjeta-contenido">
        <h3 className="libro-titulo">{libro.titulo}</h3>
        <p className="libro-autor">Por: {libro.autor}</p>
        <p className="libro-genero">{libro.genero}</p>
        <p className="libro-isbn">ISBN: {libro.isbn}</p>
        
        {libro.usuarioPrestado && (
          <p className="libro-prestado">Prestado a: {libro.usuarioPrestado}</p>
        )}
        
        <div className="tarjeta-acciones">
          <select
            value={usuarioSeleccionado}
            onChange={(e) => setUsuarioSeleccionado(e.target.value)}
            className="selector-usuario"
          >
            <option value="">Seleccionar usuario</option>
            <option value="Usuario 1">Usuario 1</option>
            <option value="Usuario 2">Usuario 2</option>
            <option value="Usuario 3">Usuario 3</option>
            <option value="Usuario 4">Usuario 4</option>
            <option value="Usuario 5">Usuario 5</option>
          </select>

          {libro.disponible ? (
            <button 
              className="boton-prestar"
              onClick={handlePrestar}
              disabled={!usuarioSeleccionado}
            >
              📚 Prestar Libro
            </button>
          ) : (
            <button 
              className="boton-lista-espera"
              onClick={handleAgregarListaEspera}
              disabled={!usuarioSeleccionado}
            >
              🕒 Agregar a Lista de Espera
            </button>
          )}
          
          {mostrarBotonDevolver && (
            <button 
              className="boton-devolver"
              onClick={() => onDevolver(libro)}
            >
              📚 Devolver
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TarjetaLibro;
