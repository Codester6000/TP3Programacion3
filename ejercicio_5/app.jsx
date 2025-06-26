function App() {
    const [numero1, setNumero1] = React.useState('');
    const [numero2, setNumero2] = React.useState('');
    const [operacion, setOperacion] = React.useState('0');
    const [resultadoTexto, setResultadoTexto] = React.useState('0');
    const [claseResultado, setClaseResultado] = React.useState('resultado-defecto');
    const [botonDeshabilitado, setBotonDeshabilitado] = React.useState(true);

    const manejarCambioOperacion = () => {
        setResultadoTexto('0');
        setClaseResultado('resultado-defecto');

        const hayCamposVacios = numero1 === '' || numero2 === '';
        const esDivisionPorCero = operacion === '4' && parseFloat(numero2) === 0;
        const noHayOperacionSeleccionada = operacion === '0';

        if (hayCamposVacios || esDivisionPorCero || noHayOperacionSeleccionada) {
            setBotonDeshabilitado(true);

            if (hayCamposVacios) {
                setResultadoTexto('Ingrese ambos números');
                setClaseResultado('resultado-error');
            } else if (esDivisionPorCero) {
                setResultadoTexto('No se puede dividir por cero');
                setClaseResultado('resultado-error');
            } else if (noHayOperacionSeleccionada) {
                setResultadoTexto('Seleccione una operación');
                setClaseResultado('resultado-error');
            }
        } else {
            setBotonDeshabilitado(false);
        }
    };

    const realizarOperacion = () => {
        if (numero1 === '' || numero2 === '') {
            alert('Necesitas poner números en ambas casillas para hacer la operación.');
            setResultadoTexto('Error: Faltan números');
            setClaseResultado('resultado-error');
            return;
        }

        const num1Float = parseFloat(numero1);
        const num2Float = parseFloat(numero2);

        if (operacion === '4' && num2Float === 0) {
            alert('No se puede dividir por cero.');
            setResultadoTexto('Error: División por cero');
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
            } else if (operacion === '4') {
                return [num1Float / num2Float, 'resultado-division'];
            } else {
                return ['Seleccione una operación', 'resultado-error'];
            }
        })();
        
        setResultadoTexto(resFinal);
        setClaseResultado(claseFinal);
    };

    React.useEffect(() => {
        manejarCambioOperacion();
    }, [numero1, numero2, operacion]);

    return (
        <div>
            <label>Ingrese un número (si la casilla está vacía no se podrá elegir la operación)</label><br />
            <input
                type="number"
                id="numero1"
                placeholder="ingrese número 1"
                value={numero1}
                onChange={(e) => setNumero1(e.target.value)}
                required
            /><br /><br />
            
            <label>Ahora ingrese el segundo número para realizar la operación</label><br />
            <input
                type="number"
                id="numero2"
                placeholder="ingrese número 2"
                value={numero2}
                onChange={(e) => setNumero2(e.target.value)}
                required
            /><br /><br />

            <select
                id="selectorOperacion"
                value={operacion}
                onChange={(e) => setOperacion(e.target.value)}
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
                disabled={botonDeshabilitado}
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