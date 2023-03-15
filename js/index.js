import {imprimir_todos} from "./cargar-los-todos.js"

imprimir_todos();

function puente(){
    let mensaje = document.querySelector(".texto").value;
    nueva_tarea(mensaje);

}


function nueva_tarea (mensaje){
    data_todo_list.push(
        {
        id : "4",
        mensaje: mensaje,
        estado: true
    }
    );
    document.querySelector(".todo_list").innerHTML = " ";
    imprimir_todos();

    document.querySelector(".modal").classList.remove("activar");

    document.querySelector(".texto").value = " ";
}

document.querySelector(".btn-tarea").addEventListener("click", puente);

let $checkbox = document.createElement("input");
    $checkbox.type = "checkbox";
    $checkbox.onchange = function () { // No es una función flecha porque quiero acceder al elemento a través de this
      if (this.checked) {
        data_todo_list[indice].estado = true;
      } else {
        data_todo_list[indice].estado = false;
      }
    }

// Verificamos si la tarea está marcada para marcar los elementos
if (nueva_tarea.estado) {
  $checkbox.checked = true;
  $span.classList.add("tachado");
}

nueva_tarea();
