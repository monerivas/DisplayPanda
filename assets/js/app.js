//----------------Imagenes de Pandas-----------
var botonRestaurar= document.getElementById("botonRestaurar");
botonRestaurar.addEventListener("click", funcion);

function cerrar1() {
  document.getElementsByClassName('className')[0].style.display="none";
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
