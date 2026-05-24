setTimeout(function(){

document.getElementById("inicio").style.display="none";

document.getElementById("chat").style.display="block";

},3000);


function responder(){

let texto=document.getElementById("input").value;
let respuesta=document.getElementById("respuesta");

respuesta.innerText="Pulga IA recibió: "+texto;

}
