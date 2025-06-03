class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
    }
}

class Cola {
    constructor() {
        this.primero = null;
        this.ultimo = null;
        this.longitud = 0;
    }

    encolar(valor) {
        const nuevoNodo = new Nodo(valor);
        
        if (!this.primero) {
            this.primero = nuevoNodo;
            this.ultimo = nuevoNodo;
        } else {
            this.ultimo.siguiente = nuevoNodo;
            this.ultimo = nuevoNodo;
        }
        
        this.longitud++;
        return this;
    }

    desencolar() {
        if (!this.primero) return null;

        const valorEliminado = this.primero.valor;
        this.primero = this.primero.siguiente;
        this.longitud--;

        if (this.longitud === 0) {
            this.ultimo = null;
        }

        return valorEliminado;
    }

    verPrimero() {
        return this.primero ? this.primero.valor : null;
    }

    estaVacia() {
        return this.longitud === 0;
    }

    tamaño() {
        return this.longitud;
    }

    obtenerTodos() {
        const elementos = [];
        let actual = this.primero;
        while (actual) {
            elementos.push(actual.valor);
            actual = actual.siguiente;
        }
        return elementos;
    }
}

export default Cola;
