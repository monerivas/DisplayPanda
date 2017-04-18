//----------------Imagenes de Pandas-----------
var taches= document.getElementsByClassName("cerrar");
var divsImagenes= document.getElementsByClassName("divsImagenes");

for(var i= 0; i<taches.length; i++){
  taches[i].addEventListener("click", eleccion);
}

function eleccion() {
  ocultardivsImagenes(this)
}

function ocultardivsImagenes(taches) {
  taches.parentNode.style.display="none";
}

//-------Restaurar Fotos--------
var botonRestaurar= document.getElementById("botonRestaurar");
botonRestaurar.addEventListener("click", restaurar);

function restaurar() {
  for(var i=0; i<divsImagenes.length; i++){
    divsImagenes[i].style.display="inline-block";
  }
}

//--------------Texto de la pagina-------------
var botonOrigen= document.getElementById("botonOrigen");
var botonHistoria= document.getElementById("botonHistoria");

var pOrigen= document.getElementById("pOrigen");
var pHistoria= document.getElementById("pHistoria");

botonOrigen.addEventListener("click", ocultarpOrigen);
botonHistoria.addEventListener("click", ocultarpHistoria);

function mortrarpOrigen() {
  pOrigen.style.visibility = "visible";
  botonOrigen.removeEventListener("click", mortrarpOrigen);
  botonOrigen.addEventListener("click", ocultarpOrigen);

}
function ocultarpOrigen() {
  pOrigen.style.visibility = "hidden";
  botonOrigen.removeEventListener("click", ocultarpOrigen);
  botonOrigen.addEventListener("click", mortrarpOrigen);
}


function mortrarpHistoria() {
  pHistoria.style.visibility = "visible";
  botonHistoria.removeEventListener("click", mortrarpHistoria);
  botonHistoria.addEventListener("click", ocultarpHistoria );
}
function ocultarpHistoria() {
  pHistoria.style.visibility = "hidden";
  botonHistoria.removeEventListener("click", ocultarpHistoria);
  botonHistoria.addEventListener("click", mortrarpHistoria );
}


//style.display= "none";
