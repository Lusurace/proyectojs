

//objeto servicios a vender

const logo = new Servicio("Creacion de Logo",1500, "Creamos tu logo, logotipo, slogan, teniendo en cuenta si tenes o no definida tu imágen de marca","img/brand.jpg")

const branding = new Servicio("Branding",2000,"Creamos tu estrategias, elección de redes e implementación","img/brand2.jpg")
 
const contenido = new Servicio("Creación de Contenido",3000,"Creamos tu contenido para redes sociales","img/brand3.jpg")
 
const producto = new Servicio("Creación de Producto",2000,"Vemos centimetro por centimetro de tu producto, su optimización, fotos, embalaje","img/brand4.jpg")

const landing = new Servicio("LandingPage",7000,"Nos encargamos de definir tu pagina de presentación y tu posicionamiento web","img/brand5.jpg")

const tienda = new Servicio("Tienda online",15000,"Tienda online personalizada","img/brand6.jpg")

//carrito
const carrito = new Carrito(0) 

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


