/**
 * Valida el formulario comprobando que los campos no estén vacíos
 */
const $boton = document.querySelector("#boton-enviar")
$boton.setAttribute("disabled", "disabled");

const $datos = document.querySelectorAll("input");
$datos.forEach(dato => {
    dato.addEventListener("change", () => {

        const $nombre = document.querySelector("[name='nombre']").value;
        const $apellido = document.querySelector("[name='apellido']").value;
        const $edad = document.querySelector("[name='edad']").value;
        const $ciudad = document.querySelector("[name='ciudad']").value;

        if ($nombre != "" && $apellido != "" && $edad != "" && $ciudad != "") {
            $boton.removeAttribute("disabled");
        } else {
            $boton.setAttribute("disabled", "disabled");
        }

    })
});


