import React from 'react';
import TarjetaLibro from './TarjetaLibro';
import './HistorialDevoluciones.css';

const HistorialDevoluciones = ({ historialPila, onDeshacerDevolucion, onAgregarListaEspera }) => {
  const librosDevueltos = historialPila.obtenerTodos();

  return (
    <div className="historial-devoluciones">
      <div className="historial-header">
        <h2>📚 Historial de Devoluciones</h2>
        <p>Últimos libros devueltos: {historialPila.tamaño()}</p>
      </div>

      <div className="libros-grid">
        {librosDevueltos.length === 0 ? (
          <div className="mensaje-vacio">
            <p>No hay libros en el historial de devoluciones</p>
          </div>
        ) : (
          librosDevueltos.map((libro) => (
            <div key={libro.isbn} className="libro-devuelto-contenedor">
              <TarjetaLibro
                libro={libro}
                onPrestar={() => {}}
                onAgregarListaEspera={onAgregarListaEspera}
              />
              <button 
                className="boton-deshacer"
                onClick={() => onDeshacerDevolucion(libro)}
              >
                ↩️ Deshacer Devolución
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HistorialDevoluciones;
