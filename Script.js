function responder(){
let texto = document.getElementById("input").value;
let respuesta = document.getElementById("respuesta");

if(texto.toLowerCase().includes("hola")){
respuesta.innerText = "Hola 👋 ¿qué necesitas?";
}
else if(texto.toLowerCase().includes("quien eres")){
respuesta.innerText = "Soy tu IA hecha en GitHub Pages 🤖";
}
else{
respuesta.innerText = "No entiendo eso todavía 😅";
}
}
