import { useState, useEffect } from 'react';
import CatalogoLibros from './componentes/CatalogoLibros';
import HistorialDevoluciones from './componentes/HistorialDevoluciones';
import ListaEspera from './componentes/ListaEspera';
import LibrosPrestados from './componentes/LibrosPrestados';
import { librosIniciales } from './datos/librosIniciales';
import ListaEnlazada from './estructuras/ListaEnlazada';
import Pila from './estructuras/Pila';
import Cola from './estructuras/Cola';
import './App.css';

function App() {
  // Inicializar estructuras de datos
  const [catalogoLibros] = useState(() => {
    const lista = new ListaEnlazada();
    librosIniciales.forEach(libro => lista.agregar(libro));
    return lista;
  });

  const [historialDevoluciones] = useState(() => new Pila());
  const [colaEspera] = useState(() => new Cola());
  const [, setActualizador] = useState(0);

  // Función para forzar re-render
  const forzarActualizacion = () => setActualizador(prev => prev + 1);

  const prestarLibro = (libro, usuario) => {
    const libroEncontrado = catalogoLibros.obtener(libro.isbn);
    if (libroEncontrado && libroEncontrado.disponible) {
      libroEncontrado.disponible = false;
      libroEncontrado.usuarioPrestado = usuario;
      forzarActualizacion();
    } else {
      // Si el libro no está disponible, agregar usuario a la cola de espera
      colaEspera.encolar({
        usuario,
        libro,
        fechaSolicitud: new Date().toLocaleDateString()
      });
      forzarActualizacion();
    }
  };

  const devolverLibro = (libro) => {
    const libroDevuelto = catalogoLibros.obtener(libro.isbn);
    if (libroDevuelto) {
      // Guardar en el historial de devoluciones
      historialDevoluciones.apilar({...libroDevuelto});
      
      // Verificar si hay usuarios en espera
      if (!colaEspera.estaVacia()) {
        const siguienteUsuario = colaEspera.desencolar();
        libroDevuelto.usuarioPrestado = siguienteUsuario.usuario;
      } else {
        libroDevuelto.disponible = true;
        libroDevuelto.usuarioPrestado = null;
      }
      
      forzarActualizacion();
    }
  };

  const deshacerDevolucion = (libro) => {
    const libroDesapilado = historialDevoluciones.desapilar();
    if (libroDesapilado) {
      const libroEnCatalogo = catalogoLibros.obtener(libroDesapilado.isbn);
      if (libroEnCatalogo) {
        libroEnCatalogo.disponible = true;
        libroEnCatalogo.usuarioPrestado = null;
      }
      forzarActualizacion();
    }
  };

  const agregarListaEspera = (libro, usuario) => {
    colaEspera.encolar({
      usuario,
      libro,
      fechaSolicitud: new Date().toLocaleDateString()
    });
    forzarActualizacion();
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>📚 Biblioteca Virtual Interactiva</h1>
      </header>

      <main className="app-contenido">
        <div className="contenedor-principal">
          <section className="seccion-catalogo">
            <CatalogoLibros 
              catalogoLibros={catalogoLibros}
              onPrestarLibro={prestarLibro}
              onAgregarListaEspera={agregarListaEspera}
            />
          </section>

          <section className="seccion-prestados">
            <LibrosPrestados 
              catalogoLibros={catalogoLibros}
              onDevolverLibro={devolverLibro}
              onAgregarListaEspera={agregarListaEspera}
            />
          </section>

          <section className="seccion-historial">
            <HistorialDevoluciones 
              historialPila={historialDevoluciones}
              onDeshacerDevolucion={deshacerDevolucion}
              onAgregarListaEspera={agregarListaEspera}
            />
          </section>
        </div>

        <div className="contenedor-secundario">
          <section className="seccion-espera">
            <ListaEspera 
              colaEspera={colaEspera}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
