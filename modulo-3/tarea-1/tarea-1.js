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

const opciones = document.querySelector(".contenedor-opciones");

opciones.addEventListener("click", actualizarEleccion);


////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// 2) COMPROBANDO MAYOR NÚMERO//////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
/**
 * Obtiene el número máximo de un arreglo con los números ingresados
 * @param {*Array} arreglo array con los valores ingresados
 * @returns 
 */
function obtenerNumeroMaximo(arreglo) {
    return Math.max(...arreglo);
}
/**
 * Genera una ventana emergente personalizada con sweetalert que tiene un mensaje especificando el número máximo
 * @param {number} maximo número máximo a mostrar en el mensaje
 */
function alerta(maximo) {
    swal(`El número máximo ingresado es ${maximo}`);
}
/**
 * Convierte los valores ingresados, obtiene el máximo y llama a la función para emitir una ventana emergente
 */
function mostrarNumeroMaximo() {

    let $numero1 = Number.parseInt(document.querySelector('input[name="max-numero-1"]').value);
    let $numero2 = Number.parseInt(document.querySelector('input[name="max-numero-2"]').value);

    let arreglo = [];
    arreglo.push($numero1);
    arreglo.push($numero2);

    let maximo = obtenerNumeroMaximo(arreglo);
    alerta(maximo);
}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// 3) SUMAR NÚMEROS           //////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
/**
 * Muestra el resultado de la suma de los números ingresados
 */
function mostrarResultadoSuma() {
    let $num1 = Number.parseInt(document.querySelector('input[name="suma-numero-1"]').value);
    let $num2 = Number.parseInt(document.querySelector('input[name="suma-numero-2"]').value);
    let suma = sumarNumeros($num1, $num2);

    const $contenedorResultado = document.querySelector(".contenedor-resultado");
    $contenedorResultado.innerHTML = `<p class="resultado-suma">La suma de los números ingresados es igual a ${suma}</p>`;
}
