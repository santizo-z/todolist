function modal (){
    document.querySelector(".modal").classList.add("activar")
}

let boton = document.querySelector("#btn-todo");
boton.addEventListener("click", modal);

function cerrar_ventana (){
    document.querySelector(".modal").classList.remove("activar");

}

let btn_cerrar = document.querySelector(".cerrar");
btn_cerrar.addEventListener("click",cerrar_ventana);