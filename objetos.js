//objeto cliente
function Usuario(nombre, apellido, mail, telefono){
	this.nombre = nombre
	this.apellido = apellido
	this.mail = mail
	this.telefono = telefono

	this.obtenerNombreUsuario = function() {
		return this.nombre + " " + this.apellido +" "+"Te enviaremos un mail a la brevedad"
	}
}


//objeto servicios a vender
function servicio(nombre, precio, caracteristica,imagen){
	this.nombre = nombre
	this.precio = precio
	this.caracteristica = caracteristica
	this.imagen = imagen
}


//objeto carrito (fijarme si quiero guardar el mail)

function carrito(nombre, precio,imagen){
	this.nombre = nombre
	this.precio = precio
	this.imagen = imagen
}



//objeto mensaje o formulario





