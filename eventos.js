//eventos de validacion
$("#nombre").keypress( function(evento) {
    if (evento.keyCode > 47 && evento.keyCode < 58) {
        return false;
    }
});

$("#apellido").keypress( function(evento) {
    if (evento.keyCode > 47 && evento.keyCode < 58) {
        return false;
    }
});

$("#tel").keypress( function(evento) {
    if (evento.keyCode < 48 || evento.keyCode > 58) {
        return false;
    }
});




//formulario de cliente 

$("#enviar").click( function() {
	guardarUsuario()
});

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

	localStorage.setItem(jsonUsuario.nombre, apellido, mail, tel, marca)
}