import React from 'react';
import TarjetaLibro from './TarjetaLibro';
import './CatalogoLibros.css';

const CatalogoLibros = ({ catalogoLibros, onPrestarLibro, onAgregarListaEspera }) => {
  const librosDisponibles = catalogoLibros.obtenerTodos();

  return (
    <div className="catalogo-libros">
      <div className="catalogo-header">
        <h2>📚 Catálogo de Libros</h2>
        <p>Total de libros: {catalogoLibros.tamaño()}</p>
      </div>

      <div className="libros-grid">
        {librosDisponibles.length === 0 ? (
          <div className="mensaje-vacio">
            <p>No hay libros en el catálogo</p>
          </div>
        ) : (
          librosDisponibles.map((libro) => (
            <TarjetaLibro
              key={libro.isbn}
              libro={libro}
              onPrestar={onPrestarLibro}
              onAgregarListaEspera={onAgregarListaEspera}
              mostrarBotonDevolver={false}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CatalogoLibros;
