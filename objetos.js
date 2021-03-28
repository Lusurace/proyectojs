

//objeto cliente
$(function Usuario(nombre, apellido, mail, telefono){
	this.nombre = nombre
	this.apellido = apellido
	this.mail = mail
	this.telefono = telefono

	this.obtenerNombreUsuario = function() {
		return this.nombre + " " + this.apellido +" "+"Te enviaremos un mail a la brevedad"
	}

}
)

//objeto servicios a vender
function Servicio(nombre, precio, caracteristica,imagen){
	this.nombre = nombre
	this.precio = precio
	this.caracteristica = caracteristica
	this.imagen = imagen
}


//objeto carrito 

function Carrito(precio){
	this.productos = []
	this.precio = precio

	this.agregarProducto = function(producto) {
		this.productos.push(producto)
	}

	this.sumarPrecio = function(precio) {
		this.precio = this.precio + precio
	}
}







