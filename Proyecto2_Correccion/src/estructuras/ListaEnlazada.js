class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
    }
}

class ListaEnlazada {
    constructor() {
        this.cabeza = null;
        this.cola = null;
        this.longitud = 0;
    }

    agregar(valor) {
        const nuevoNodo = new Nodo(valor);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
        } else {
            this.cola.siguiente = nuevoNodo;
            this.cola = nuevoNodo;
        }
        this.longitud++;
        return this;
    }

    eliminar(isbn) {
        if (!this.cabeza) return null;

        if (this.cabeza.valor.isbn === isbn) {
            const libroEliminado = this.cabeza.valor;
            this.cabeza = this.cabeza.siguiente;
            this.longitud--;
            if (this.longitud === 0) {
                this.cola = null;
            }
            return libroEliminado;
        }

        let actual = this.cabeza;
        while (actual.siguiente && actual.siguiente.valor.isbn !== isbn) {
            actual = actual.siguiente;
        }

        if (actual.siguiente) {
            const libroEliminado = actual.siguiente.valor;
            actual.siguiente = actual.siguiente.siguiente;
            this.longitud--;
            if (!actual.siguiente) {
                this.cola = actual;
            }
            return libroEliminado;
        }

        return null;
    }

    obtener(isbn) {
        let actual = this.cabeza;
        while (actual) {
            if (actual.valor.isbn === isbn) {
                return actual.valor;
            }
            actual = actual.siguiente;
        }
        return null;
    }

    tamaño() {
        return this.longitud;
    }

    obtenerTodos() {
        const libros = [];
        let actual = this.cabeza;
        while (actual) {
            libros.push(actual.valor);
            actual = actual.siguiente;
        }
        return libros;
    }
}

export default ListaEnlazada;
