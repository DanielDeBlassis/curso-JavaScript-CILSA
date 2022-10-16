/**
 * Ordena la lista de alumnos por orden de entrega
 * 
 * @returns array con la lista ordenada
 */
function ordenarPorEntrega() {
    const posicionesEntrega = [];
    for (let i = 0; i < posicionesLista.length; i++) {
        if (posicionesLista[i] === "Jesús") {
            // posi3.push("Jesús"); <i id="stable" class="fas fa-grip-lines"></i>
            posicionesEntrega.push(`${posicionesLista[i]} &nbsp<i id="stable" class="fas fa-grip-lines"></i>`);
            posicionesEntrega.push(`Roberto &nbsp<i id="plus" class="fas fa-plus"></i>`);
            posicionesEntrega.push(`Claudia &nbsp<i id="plus" class="fas fa-plus"></i>`);
        } else if (posicionesLista[i] === "Nahuel") {
            posicionesEntrega.push(`${posicionesLista[i + 1]} &nbsp<i id="upper" class="fas fa-arrow-up"></i>`);
        } else if (posicionesLista[i] === "Mónica") {
            posicionesEntrega.push(`${posicionesLista[i - 1]} &nbsp<i id="down" class="fas fa-arrow-down"></i>`);
        } else if (posicionesLista[i] === "Leandro") {
            continue;
        } else {
            posicionesEntrega.push(`${posicionesLista[i]} &nbsp<i id="down" class="fas fa-arrow-down"></i>`);
        }
    }
    return posicionesEntrega;
}

/**
 * Imprime un arreglo de nombres que se le pasa como parámetro
 * 
 * @param {*Array} array arreglo que contiene una colección de nombres
 * @param {*String} titulo texto que describe el criterio de ordenamiento
 */
function imprimirPosiciones(array, titulo) {

    const $titulo = document.querySelector(".posiciones_titulo");
    const $contenedorPosicionesActuales = document.querySelector(".posiciones--actuales");

    let contenidoPosiciones = ``;

    for (let i = 0; i < array.length; i++) {
        contenidoPosiciones += `<p class="posicion"><b>#${i + 1}</b> ${array[i]}</p>`;
    }

    $titulo.innerHTML = ``;
    $titulo.innerHTML = `<h2>${titulo}</h2>`;

    $contenedorPosicionesActuales.innerHTML = contenidoPosiciones;
}

const posicionesLista = ["Jesús", "Laura", "Nahuel", "Mónica", "María", "Leandro", "Susana"];
