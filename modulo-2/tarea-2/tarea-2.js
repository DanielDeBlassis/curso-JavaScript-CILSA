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

