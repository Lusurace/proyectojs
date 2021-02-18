


//productos y eleccion pasaje a modales y armado de carrito



//formulario de cliente
document.getElementById("enviar").addEventListener("click", guardarUsuario)

function guardarUsuario() {
	var nombre = document.getElementById("nombre").value
	var apellido = document.getElementById("apellido").value
	var mail = document.getElementById("mail").value
	var tel = document.getElementById("tel").value
	var marca = document.getElementById("marca").value
	var redes = document.getElementById("redes").value
	var redes2 = document.getElementById("redes2").value
	var redes3 = document.getElementById("redes3").value


	var jsonUsuario = {
		"nombre" : nombre,
		"apellido" : apellido,
		"mail" : mail,
		"tel" : tel,
		"marca" : marca,

	}

	localStorage.setItem(jsonUsuario.nombre, apellido, mail)
}


