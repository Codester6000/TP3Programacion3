function realizarOperacion() {
    const valorSeleccionado = document.getElementById('selectorOperacion').value;
    const num1Texto = document.getElementById('numero1').value;
    const num2Texto = document.getElementById('numero2').value;
    const divResultado = document.getElementById('divResultado');
    let resultado = 0;
    let claseColor = 'resultado-defecto';

    if (num1Texto === "" || num2Texto === "") {
        alert("Necesitas poner números en ambas casillas para hacer la operación.");
        divResultado.innerText = "Error: Faltan números";
        divResultado.className = 'resultado-error';
        return;
    }

    const num1 = +num1Texto;
    const num2 = +num2Texto;

    if (valorSeleccionado === "4" && num2 === 0) {
        alert("No se puede dividir por cero.");
        divResultado.innerText = "Error: División por cero";
        divResultado.className = 'resultado-error';
        return;
    }

    switch(valorSeleccionado) {
        case "1": 
            resultado = num1 + num2;
            claseColor = 'resultado-suma';
            break;
        case "2": 
            resultado = num1 - num2;
            claseColor = 'resultado-resta';
            break;
        case "3": 
            resultado = num1 * num2;
            claseColor = 'resultado-multiplicacion';
            break;
        case "4": 
            resultado = num1 / num2;
            claseColor = 'resultado-division';
            break;
        default: 
            resultado = "Seleccione una operación";
            claseColor = 'resultado-error';
            break;
    }
    
    divResultado.innerText = resultado;
    divResultado.className = claseColor;
}

function manejarCambioOperacion() {
    const valorSeleccionado = document.getElementById('selectorOperacion').value;
    const num1Texto = document.getElementById('numero1').value; 
    const num2Texto = document.getElementById('numero2').value; 
    const botonCalcular = document.getElementById('botonCalcular');
    const divResultado = document.getElementById('divResultado');

    divResultado.innerText = "0";
    divResultado.className = 'resultado-defecto';

    const hayCamposVacios = num1Texto === "" || num2Texto === "";
    const esDivisionPorCero = valorSeleccionado === "4" && +num2Texto === 0;
    const noHayOperacionSeleccionada = valorSeleccionado === "0";

    if (hayCamposVacios || esDivisionPorCero || noHayOperacionSeleccionada) {
        botonCalcular.disabled = true;

        if (hayCamposVacios) {
            divResultado.innerText = "Ingrese ambos números";
            divResultado.className = 'resultado-error';
        } else if (esDivisionPorCero) {
            divResultado.innerText = "No se puede dividir por cero";
            divResultado.className = 'resultado-error';
        } else if (noHayOperacionSeleccionada) {
            divResultado.innerText = "Seleccione una operación";
            divResultado.className = 'resultado-error';
        }
    } else {
        botonCalcular.disabled = false; 
    }
}

manejarCambioOperacion();