

function preguntarEdad() {
	edad = prompt("Ingrese su edad")

	if (edad <= 17) {
	    alert("Es demasiado menor para ser usuario")
	} else if (edad < 17)  { 
	    alert("Es menor de edad")
	} else if (edad >= 1000) { 
	    alert("valor incorrecto")
	} else {
	    alert("Bienvenido")
	}
}

// preguntarEdad()


// var nombre = prompt("Ingrese su nombre")
// imprimir("consola", "Su nombre es", nombre)
// var apellido = prompt("Ingrese su apellido")
// imprimir("alerta", "Su apellido es", apellido)
// imprimir("otro", nombre, apellido)



//objeto


function Usuario(nombre) {
	this.nombre	  = nombre
	this.estado   = "Esta asignado"
	this.nombreUsuario = function() {
		return 'Usuario: ' + this.nombre
	}

	this.suEstado = function() {
		return this.estado
	}
}

var nombre  = prompt("Cual es tu nombre: ");

var usuario = new Usuario(nombre);

console.log(usuario.nombreUsuario())
console.log(usuario.suEstado())







function producto(nombre, precio, peso, ruta){
	this.nombre = nombre
	this.precio = precio
	this.peso = peso
	this.imagen = ruta
}


var jabon = new producto("Jabon de Naranja", 200, 90, "img/jabondecafe.jpg")
 console.log(jabon)

//arrays//


let productos = ["Desodorante", "Shampoo Solido Curcuma", "Bombas de paz", "Jabon de Naranja","Jabon de Cafe","Jabon de Zanahoria"]
console.log( productos.toString()  )


//ciclo//

for (let i = 0; i < productos.length; i++) {
    console.log( productos[i].toUpperCase() )
}







