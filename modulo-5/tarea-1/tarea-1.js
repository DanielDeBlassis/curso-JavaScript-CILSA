let nombreIngresado = "";
let apellidoIngresado = "";

let mensaje = document.createElement("p");

window.onload = function () {

    const $contenedorMensaje = document.querySelector(".container__mensaje");

    const $info = document.getElementById("infopag");
    const $enlaces = document.getElementsByTagName("a");

    //Mensaje de bienvenida más nombre ingresado (Pista: usar innerHTML)
    swal("Ingresa tu nombre:", {
        content: "input",
    })
        .then((nombre) => {
            nombreIngresado = `${nombre}`;
            mensaje.textContent = nombreIngresado != "null" && nombreIngresado.length != 0 ? `Gracias por visitar nuestra página ${nombreIngresado}!` : `Gracias por visitar nuestra página!`;
            $contenedorMensaje.insertBefore(mensaje, $contenedorMensaje.children[0]);
            swal("Ingresa tu apellido:", {
                content: "input",
            })
                .then((apellido) => {
                    apellidoIngresado = `${apellido}`;
                    $contenedorMensaje.classList.remove("oculto");
                });
        });

    //Número de enlaces que tiene la página (Pista: usar innerHTML)
    let pEnlaces = document.createElement("p");
    pEnlaces.textContent = `Número de enlaces = ${$enlaces.length}`;
    $contenedorMensaje.appendChild(pEnlaces);

}

//Completa la función agrega()
let $listaNombre = document.querySelector("#alumnos");

function agregar() {
    if ((nombreIngresado != "null" && nombreIngresado.length != 0) && (apellidoIngresado != "null" && apellidoIngresado.length != 0)) {
        let nombreCompleto = `${nombreIngresado} ${apellidoIngresado}`;
        let nombre = document.createElement("li");
        nombre.innerHTML = `<i class="far fa-check-circle"></i><span>${nombreCompleto}</span>`;
        $listaNombre.appendChild(nombre);
    } else {
        swal("Error!", "No introdujo nombre o apellido", "error");
    }
}
