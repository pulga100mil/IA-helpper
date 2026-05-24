function responder(){
let texto = document.getElementById("input").value;
let respuesta = document.getElementById("respuesta");

if(texto.toLowerCase().includes("hola")){
respuesta.innerText = "Hola 👋 ya puedes subir imágenes también";
}
else{
respuesta.innerText = "Recibí tu mensaje 👍";
}
}

// Mostrar imagen
function cargarImagen(event){
let img = document.getElementById("preview");
img.src = URL.createObjectURL(event.target.files[0]);
img.style.display = "block";

document.getElementById("respuesta").innerText =
"Imagen cargada 📸 (la IA aún no la analiza)";
}
