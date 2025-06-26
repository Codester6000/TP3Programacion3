const { useState } = React;

function App() {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [operacion, setOperacion] = useState('0');
    const [resultadoTexto, setResultadoTexto] = useState('0');
    const [claseResultado, setClaseResultado] = useState('resultado-defecto');
    const [botonCalcularDeshabilitado, setBotonCalcularDeshabilitado] = useState(true);

    const actualizarEstadoBoton = (num1Actual, num2Actual, operacionActual) => {
        setResultadoTexto('0');
        setClaseResultado('resultado-defecto');

        const num1Vacio = num1Actual === '';
        const num2Vacio = num2Actual === '';
        const operacionNoSeleccionada = operacionActual === '0';
        const divisionPorCero = operacionActual === '4' && parseFloat(num2Actual) === 0;
        const operacionEsDivision = operacionActual === '4';

        if (num1Vacio || num2Vacio || operacionNoSeleccionada || divisionPorCero || operacionEsDivision) {
            setBotonCalcularDeshabilitado(true);

            if (num1Vacio || num2Vacio) {
                setResultadoTexto('Ingrese ambos números');
                setClaseResultado('resultado-error');
            } else if (operacionNoSeleccionada) {
                setResultadoTexto('Seleccione una operación');
                setClaseResultado('resultado-error');
            } else if (divisionPorCero) {
                setResultadoTexto('No se puede dividir por cero');
                setClaseResultado('resultado-error');
            } else if (operacionEsDivision) {
                setResultadoTexto('Operación de División seleccionada');
                setClaseResultado('resultado-defecto');
            }
        } else {
            setBotonCalcularDeshabilitado(false);
        }
    };

    const realizarOperacion = () => {
        if (numero1 === '' || numero2 === '') {
            alert("Necesitas poner números en ambas casillas para hacer la operación.");
            setResultadoTexto("Error: Faltan números");
            setClaseResultado('resultado-error');
            return;
        }

        const num1Float = parseFloat(numero1);
        const num2Float = parseFloat(numero2);

        if (operacion === '4' && num2Float === 0) {
            alert("No se puede dividir por cero.");
            setResultadoTexto("Error: División por cero");
            setClaseResultado('resultado-error');
            return;
        }
        
        if (operacion === '4') {
            setResultadoTexto('Botón deshabilitado para división');
            setClaseResultado('resultado-error');
            return;
        }

        const [resFinal, claseFinal] = (() => {
            if (operacion === '1') {
                return [num1Float + num2Float, 'resultado-suma'];
            } else if (operacion === '2') {
                return [num1Float - num2Float, 'resultado-resta'];
            } else if (operacion === '3') {
                return [num1Float * num2Float, 'resultado-multiplicacion'];
            } else {
                return ['Seleccione una operación', 'resultado-error'];
            }
        })();
        
        setResultadoTexto(resFinal);
        setClaseResultado(claseFinal);
    };

    const manejarCambioNumero1 = (e) => {
        const valor = e.target.value;
        setNumero1(valor);
        actualizarEstadoBoton(valor, numero2, operacion);
    };

    const manejarCambioNumero2 = (e) => {
        const valor = e.target.value;
        setNumero2(valor);
        actualizarEstadoBoton(numero1, valor, operacion);
    };

    const manejarCambioOperacionSelect = (e) => {
        const valor = e.target.value;
        setOperacion(valor);
        actualizarEstadoBoton(numero1, numero2, valor);
    };

    return (
        <div>
            <label>Ingrese un número (si la casilla está vacía no se podrá elegir la operación)</label><br />
            <input
                type="number"
                id="numero1"
                placeholder="ingrese número 1"
                value={numero1}
                onChange={manejarCambioNumero1}
                required
            /><br /><br />
            
            <label>Ahora ingrese el segundo número para realizar la operación</label><br />
            <input
                type="number"
                id="numero2"
                placeholder="ingrese número 2"
                value={numero2}
                onChange={manejarCambioNumero2}
                required
            /><br /><br />

            <select
                id="selectorOperacion"
                value={operacion}
                onChange={manejarCambioOperacionSelect}
            >
                <option value="0">Seleccione una Operación</option>    
                <option value="1">Suma</option>
                <option value="2">Resta</option>
                <option value="3">Multiplicación</option>
                <option value="4">División</option>
            </select>

            <button
                type="button"
                id="botonCalcular"
                onClick={realizarOperacion}
                disabled={botonCalcularDeshabilitado}
            >
                Calcular
            </button><br /><br />
            
            <div id="divResultado" className={claseResultado}>
                {resultadoTexto}
            </div>
        </div>
    );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);