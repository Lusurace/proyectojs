

//objeto servicios a vender

var logo = new Servicio("Creacion de Logo",1500, "Creamos tu logo, logotipo, slogan, teniendo en cuenta si tenes o no definida tu imágen de marca","img/brand.jpg")
console.log("Creacion de Logo")

var branding = new Servicio("Branding",2000,"Creamos tu estrategias, elección de redes e implementación","img/brand2.jpg")
 console.log("Branding")

var contenido = new Servicio("Creación de Contenido",3000,"Creamos tu contenido para redes sociales","img/brand3.jpg")
 console.log("Creación de Contenido")

var producto = new Servicio("Creación de Producto",2000,"Vemos centimetro por centimetro de tu producto, su optimización, fotos, embalaje","img/brand4.jpg")
 console.log("Creación de Producto")

var landing = new Servicio("LandingPage",7000,"Nos encargamos de definir tu pagina de presentación y tu posicionamiento web","img/brand5.jpg")
 console.log("LandingPage")

var tienda = new Servicio("Tienda online",15000,"Tienda online personalizada","img/brand6.jpg")
 console.log("Tienda online")

//carrito
var carrito = new Carrito(0) 

//array de servicios//

let arServicios = [logo, branding, contenido, producto, landing, tienda]
localStorage.setItem("servicios", JSON.stringify(arServicios))

//ajax no funciona aun

$("#mensaje").click(function(){ // Asociamos la llamada AJAX al evento click
  $.ajax ({
    url: "./mensaje.json",  //URL del servidor, archivo JSON
    type: "GET",                  //tipo de solicitud
    dataType: "json"            //tipo de dato
  }).done(function (resultado) {    //callback con ejecución correcta
       console.log(resultado);
    })
    .fail(function (xhr, status, error) {   //callback con ejecución con error
       console.log(xhr); 
       console.log(status); 
       console.log(error);
    })
});


//animaciones de modal


