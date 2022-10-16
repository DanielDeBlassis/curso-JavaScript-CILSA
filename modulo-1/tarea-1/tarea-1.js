const $containerResultado = document.querySelector(".container-resultado");

/**
 * Imprime los datos introducidos por el usuario
 */
function imprimirDatos() {
    const $nombre = document.querySelector("input[name='nombre']").value;
    // $nombre.addEventListener("keyup", ()=> console.log($nombre.value));
    const $apellido = document.querySelector("input[name='apellido']").value;
    const $edad = Number.parseInt(document.querySelector("input[name='edad']").value);

    return $containerResultado.innerHTML = `<h3>Usted se ha registrado con los siguientes datos:</h3>
                                            <p><em>-Nombre</em>: <b>${$nombre}</b></p>
                                            <p><em>-Apellido</em>: <b>${$apellido}</b></p>
                                            <p><em>-Edad</em>: <b>${$edad}</b></p>`;
}
