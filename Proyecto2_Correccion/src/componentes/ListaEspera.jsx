import React from 'react';
import './ListaEspera.css';

const ListaEspera = ({ colaEspera }) => {
  const usuariosEnEspera = colaEspera.obtenerTodos();

  return (
    <div className="lista-espera">
      <div className="lista-header">
        <h2>👥 Lista de Espera</h2>
        <p>Usuarios en espera: {colaEspera.tamaño()}</p>
      </div>

      <div className="usuarios-lista">
        {usuariosEnEspera.length === 0 ? (
          <div className="mensaje-vacio">
            <p>No hay usuarios en lista de espera</p>
          </div>
        ) : (
          <div className="cola-usuarios">
            {usuariosEnEspera.map((solicitud, index) => (
              <div key={index} className="solicitud-espera">
                <div className="numero-orden">#{index + 1}</div>
                <div className="detalles-solicitud">
                  <h3>{solicitud.usuario}</h3>
                  <div className="libro-solicitado">
                    <p><strong>Libro:</strong> {solicitud.libro.titulo}</p>
                    <p><strong>Autor:</strong> {solicitud.libro.autor}</p>
                    <p><strong>ISBN:</strong> {solicitud.libro.isbn}</p>
                  </div>
                  <p className="fecha-solicitud">
                    Solicitud realizada: {solicitud.fechaSolicitud}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListaEspera;
