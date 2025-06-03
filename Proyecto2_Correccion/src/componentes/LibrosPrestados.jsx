import React from 'react';
import TarjetaLibro from './TarjetaLibro';
import './LibrosPrestados.css';

const LibrosPrestados = ({ catalogoLibros, onDevolverLibro, onAgregarListaEspera }) => {
  const librosPrestados = catalogoLibros.obtenerTodos().filter(libro => !libro.disponible);

  return (
    <div className="libros-prestados">
      <div className="prestados-header">
        <h2>📖 Libros Prestados</h2>
        <p>Total prestados: {librosPrestados.length}</p>
      </div>

      <div className="libros-grid">
        {librosPrestados.length === 0 ? (
          <div className="mensaje-vacio">
            <p>No hay libros prestados actualmente</p>
          </div>
        ) : (
          librosPrestados.map((libro) => (
            <div key={libro.isbn} className="libro-prestado-contenedor">
              <TarjetaLibro
                libro={libro}
                onPrestar={() => {}}
                onAgregarListaEspera={onAgregarListaEspera}
                mostrarBotonDevolver={false}
              />
              <button 
                className="boton-devolver-principal"
                onClick={() => onDevolverLibro(libro)}
              >
                📚 Devolver Libro
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LibrosPrestados;
