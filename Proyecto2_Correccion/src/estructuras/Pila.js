class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
    }
}

class Pila {
    constructor() {
        this.tope = null;
        this.longitud = 0;
    }

    apilar(valor) {
        const nuevoNodo = new Nodo(valor);
        nuevoNodo.siguiente = this.tope;
        this.tope = nuevoNodo;
        this.longitud++;
        return this;
    }

    desapilar() {
        if (!this.tope) return null;
        
        const valorEliminado = this.tope.valor;
        this.tope = this.tope.siguiente;
        this.longitud--;
        return valorEliminado;
    }

    verTope() {
        return this.tope ? this.tope.valor : null;
    }

    estaVacia() {
        return this.longitud === 0;
    }

    tamaño() {
        return this.longitud;
    }

    obtenerTodos() {
        const elementos = [];
        let actual = this.tope;
        while (actual) {
            elementos.push(actual.valor);
            actual = actual.siguiente;
        }
        return elementos;
    }
}

export default Pila;
