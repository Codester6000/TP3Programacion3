const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const selectorOperacion = document.getElementById("selectorOperacion");
const botonCalcular = document.getElementById("botonCalcular");
const divResultado = document.getElementById("divResultado");

botonCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    const op = selectorOperacion.value;
    const num1 = Number(numero1.value);
    const num2 = Number(numero2.value);

    if (op === "0") {
        divResultado.textContent = "Debes seleccionar una operación";
        return;
    }

    let resultado;

    if (op === "1") {
        resultado = num1 + num2;
    } else if (op === "2") {
        resultado = num1 - num2;
    } else if (op === "3") {
        resultado = num1 * num2;
    } else if (op === "4") {
        if (num2 === 0) {
            divResultado.textContent = "No se puede dividir por 0";
            return;
        }
        resultado = (num1 / num2).toFixed(2);
    }

    divResultado.textContent = `El resultado es: ${resultado}`;
    numero1.value = "";
    numero2.value = "";
    selectorOperacion.value = "0";
    botonCalcular.disabled = false;
});

function actualizarEstadoBoton() {
    const op = selectorOperacion.value;
    const num2 = Number(numero2.value);

    if (op === "4" && num2 === 0) {
        botonCalcular.disabled = true;
    } else {
        botonCalcular.disabled = false;
    }
}

selectorOperacion.addEventListener("change", actualizarEstadoBoton);
numero2.addEventListener("input", actualizarEstadoBoton);
