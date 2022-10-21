////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// 1) MANIPULANDO INPUT CHECKS//////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
/**
 * Obtiene el valor del input de tipo check seleccionado y llama a la función para imprimirlo
 */
function actualizarEleccion() {
    let $eleccion = document.querySelector('[name="opcion"]:checked').value;
    imprimirMensaje($eleccion);
}

/**
 * Obtiene el contenedor del resultado previamente creado e imprime el resultado de la elección
 * @param {string} eleccion el valor del input de tipo check seleccionado
 */
function imprimirMensaje(eleccion) {
    let mensaje = eleccion === "argentina" ? "El mundial lo ganará" : "Según usted, el mundial lo ganará";
    const mensajeCheck = document.querySelector(".contenedor-mensaje");
    mensajeCheck.innerHTML = `<p class="ganador-elegido ${eleccion}">${mensaje} <span class="eleccion ${eleccion}">${eleccion}</span> <img src="img/${eleccion}.png" class="flag-2 ${eleccion}" alt="Bandera de ${eleccion}"/></p>`;
}

