# 📚 Biblioteca Virtual Interactiva

## Descripción
Aplicación React que simula el sistema de préstamos y devoluciones de libros en una biblioteca virtual, implementando las estructuras de datos enseñadas en clase: **Listas Enlazadas**, **Pilas** y **Colas**.

## Estructuras de Datos Implementadas

### 📋 Lista Enlazada (Catálogo de Libros)
- **Archivo**: `src/estructuras/ListaEnlazada.js`
- **Funcionalidad**: Gestiona el catálogo de libros disponibles
- **Métodos implementados**:
  - `agregar(libro)`: Añade un libro al catálogo
  - `eliminar(isbn)`: Elimina un libro por ISBN
  - `obtener(isbn)`: Busca un libro específico
  - `tamaño()`: Retorna el número de libros
  - `obtenerTodos()`: Retorna todos los libros

### 📚 Pila (Historial de Devoluciones)
- **Archivo**: `src/estructuras/Pila.js`
- **Funcionalidad**: Controla los libros devueltos recientemente (LIFO)
- **Métodos implementados**:
  - `apilar(libro)`: Añade libro devuelto al historial
  - `desapilar()`: Remueve el último libro devuelto
  - `verTope()`: Ve el último libro devuelto sin removerlo
  - `estaVacia()`: Verifica si hay libros en el historial

### 👥 Cola (Lista de Espera)
- **Archivo**: `src/estructuras/Cola.js`
- **Funcionalidad**: Administra la cola de espera para libros prestados (FIFO)
- **Métodos implementados**:
  - `encolar(solicitud)`: Añade usuario a la cola de espera
  - `desencolar()`: Remueve el primer usuario de la cola
  - `verPrimero()`: Ve el primer usuario sin removerlo
  - `estaVacia()`: Verifica si hay usuarios esperando

## Componentes React

### 🏠 App.jsx
Componente principal que maneja el estado global y la lógica de negocio.

### 📖 CatalogoLibros.jsx
Muestra los libros disponibles y permite prestarlos a usuarios.

### 📚 LibrosPrestados.jsx
Muestra los libros actualmente prestados y permite devolverlos.

### 📋 HistorialDevoluciones.jsx
Muestra el historial de devoluciones con opción de deshacer.

### 👥 ListaEspera.jsx
Muestra la cola de usuarios esperando por libros prestados.

### 🎴 TarjetaLibro.jsx
Componente reutilizable para mostrar información de un libro.

## Funcionalidades Principales

### ✅ Gestión del Catálogo
- Mostrar libros disponibles
- Prestar libro (se elimina de la lista y se asigna a un usuario)
- Selección de usuario para préstamo

### ✅ Sistema de Devoluciones
- Devolver libro (va a la pila de devueltos)
- Historial de libros devueltos recientemente
- Función "deshacer devolución" (saca de la pila y vuelve al catálogo)

### ✅ Cola de Espera Automática
- Si un libro está prestado, los usuarios pueden entrar en cola
- Cuando se devuelve el libro, se asigna automáticamente al siguiente de la cola
- Visualización de posición en la cola y detalles de solicitud

## Diseño y Estilo

### 🎨 Paleta de Colores Pastel
- **Rosa pastel**: `#FFE5E5` - Color primario
- **Azul pastel**: `#E5F4FF` - Color secundario  
- **Verde pastel**: `#E5FFE5` - Color terciario
- **Lila pastel**: `#FFE5F4` - Color de acento

### 📱 Diseño Responsivo
- Grid layout adaptativo
- Componentes optimizados para móvil y desktop
- Transiciones suaves y efectos hover

## Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

## Tecnologías Utilizadas
- **React 18** - Framework de interfaz de usuario
- **Vite** - Herramienta de construcción y desarrollo
- **CSS3** - Estilos con variables CSS y grid layout
- **JavaScript ES6+** - Lógica de aplicación

## Estructura del Proyecto
```
src/
├── componentes/          # Componentes React
├── estructuras/          # Implementación de estructuras de datos
├── datos/               # Datos iniciales y mock data
├── estilos/             # Variables CSS y estilos globales
├── App.jsx              # Componente principal
├── main.jsx             # Punto de entrada
└── index.css            # Estilos globales
```

## Autor
Proyecto desarrollado siguiendo las enseñanzas de las clases de Estructura de Datos y Algoritmos 2.
