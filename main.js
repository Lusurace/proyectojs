//objetos y arrays


//objeto servicios a vender

var logo = new servicio("Creacion de Logo",1500, "Creamos tu logo, logotipo, slogan, teniendo en cuenta si tenes o no definida tu imágen de marca","img/brand.jpg")
 console.log("Creacion de Logo")

var branding = new servicio("Branding",2000,"Creamos tu estrategias, elección de redes e implementación","img/brand2.jpg")
 console.log("Branding")

var contenido = new servicio("Creación de Contenido",3000,"Creamos tu contenido para redes sociales","img/brand3.jpg")
 console.log("Creación de Contenido")

var producto = new servicio("Creación de Producto",2000,"Vemos centimetro por centimetro de tu producto, su optimización, fotos, embalaje","img/brand4.jpg")
 console.log("Creación de Producto")

var landing = new servicio("LandingPage",7000,"Nos encargamos de definir tu pagina de presentación y tu posicionamiento web","img/brand5.jpg")
 console.log("LandingPage")

var tienda = new servicio("Tienda online",15000,"Tienda online personalizada","img/brand6.jpg")
 console.log("Tienda online")

//array de servicios//

let servicios = [logo, branding, contenido, producto, landing, tienda]
console.log( servicios)

