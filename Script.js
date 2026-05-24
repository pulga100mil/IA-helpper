window.onload = function() {

setTimeout(function() {

document.getElementById("inicio").style.display = "none";
document.getElementById("chat").style.display = "block";

}, 3000);

}

function responder(){

let texto = document.getElementById("input").value;
document.getElementById("respuesta").innerText =
"Pulga IA recibió: " + texto;

}
