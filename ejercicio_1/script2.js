const formulario = document.getElementById("formulario");
const selectorOperacion = document.getElementById("selectorOperacion");
const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const botonCalcular = document.getElementById("botonCalcular");
const divResultado = document.getElementById("divResultado");

formulario.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const n1Texto = numero1.value;
    const n2Texto = numero2.value;
    const operacion = selectorOperacion.value;

    if (n1Texto === "" || n2Texto === "") {
        divResultado.innerText = "Error: Faltan números";
        divResultado.className = 'resultado-error';
        return;
    }

    const n1 = parseFloat(n1Texto);
    const n2 = parseFloat(n2Texto);

    if (operacion === "0") {
        divResultado.innerText = "Seleccione una operación";
        divResultado.className = 'resultado-error';
        return;
    }

    if (operacion === "4" && n2 === 0) {
        divResultado.innerText = "Error: División por cero";
        divResultado.className = 'resultado-error';
        return;
    }

    let resultado = 0;
    let claseResultado = 'resultado-defecto';

    switch (operacion) {
        case "1":
            resultado = n1 + n2;
            claseResultado = 'resultado-suma';
            break;
        case "2":
            resultado = n1 - n2;
            claseResultado = 'resultado-resta';
            break;
        case "3":
            resultado = n1 * n2;
            claseResultado = 'resultado-multiplicacion';
            break;
        case "4":
            resultado = n1 / n2;
            claseResultado = 'resultado-division';
            break;
    }

    divResultado.innerText = "El resultado es: " + resultado;
    divResultado.className = claseResultado;
});

function manejarCambioOperacion() {
    const operacion = selectorOperacion.value;
    const n1Texto = numero1.value;
    const n2Texto = numero2.value;

    const camposVacios = n1Texto === "" || n2Texto === "";
    const divisionPorCero = operacion === "4" && +n2Texto === 0;
    const noSeleccionada = operacion === "0";

    if (camposVacios || divisionPorCero || noSeleccionada) {
        botonCalcular.disabled = true;

        if (camposVacios) {
            divResultado.innerText = "Ingrese ambos números";
            divResultado.className = 'resultado-error';
        } else if (divisionPorCero) {
            divResultado.innerText = "No se puede dividir por cero";
            divResultado.className = 'resultado-error';
        } else if (noSeleccionada) {
            divResultado.innerText = "Seleccione una operación";
            divResultado.className = 'resultado-error';
        }
    } else {
        botonCalcular.disabled = false;
        divResultado.innerText = "0";
        divResultado.className = 'resultado-defecto';
    }
}


numero1.addEventListener("input", manejarCambioOperacion);
numero2.addEventListener("input", manejarCambioOperacion);
selectorOperacion.addEventListener("change", manejarCambioOperacion);


manejarCambioOperacion();
