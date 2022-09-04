/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implementar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/

const formulario = document.querySelector("form");
const inputTexto = document.querySelector("form #comentario");
const cajaComentarios = document.querySelector(".comentarios")
const btnBorrar = document.querySelector("#borrar");

let comentarios = JSON.parse(localStorage.getItem("comentario"));


if (comentarios) {
  comentarios.forEach(item => cajaComentarios.innerHTML += `<p>${item.comentario} - <small> ${item.horario}</small></p>`);
} else {
  comentarios = [];
}

formulario.addEventListener("submit", function(e){
    e.preventDefault();

    objetoComentario();

    localStorage.setItem("comentario", JSON.stringify(comentarios));

    cajaComentarios.innerHTML = '';
    comentarios.forEach(item => cajaComentarios.innerHTML += `<p>${item.comentario} - <small> ${item.horario}</small></p>`);
    location.reload();
})

btnBorrar.addEventListener('click', function(){
  localStorage.removeItem('comentario', JSON.stringify(comentarios));
  location.reload();
})

function objetoComentario(){
  let fecha = new Date();
  let horario = `${fecha.toDateString().slice(4,10)} ${fecha.toTimeString().slice(0,8)}`;

  comentarios.push({
      comentario: inputTexto.value.trim(),
      horario,
  });
}