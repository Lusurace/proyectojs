//nodos en español

function crearNodo(tipoNodo, texto) {
    if (tipoNodo == "elemento") {
        return document.createElement(texto)
    }
    if (tipoNodo == "texto") {
        return document.createTextNode(texto)
    }
}

function crearAtributo(nodo, clave, valor) {
    return nodo.setAttribute(clave, valor)
}

function atarNodo(nodoPadre, nodoHijo) {
    nodoPadre.appendChild(nodoHijo)
}

//Funcion general que carga datos en carrito


