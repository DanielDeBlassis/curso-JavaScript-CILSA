/**
 * Muestra los datos ingresados en el formulario
 * @param {*Event} event tipo de evento, en este caso "click"
 */
function mostrarDatos(event) {
    event.preventDefault();

    const $datos = document.querySelectorAll("input");
    const arregloDatos = [];
    $datos.forEach(dato => { arregloDatos.push(dato.value); });

    const $contenedorInformacion = document.querySelector("#info-container");
    $contenedorInformacion.innerHTML = ``;

    const parrafo = document.createElement("p");
    parrafo.classList.add("parrafo");
    parrafo.textContent = `Hola ${arregloDatos[0]} ${arregloDatos[1]}! Así que tenés ${arregloDatos[2]} años y sos de ${arregloDatos[3]}...Bienvenido!`;
    $contenedorInformacion.appendChild(parrafo);
}




