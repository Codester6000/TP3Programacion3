const { useState } = React;

function CalculadoraIMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);
  const [color, setColor] = useState('');

  const calcularIMC = (e) => {
    e.preventDefault();

    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum <= 0) {
      setResultado('Por favor, ingrese valores válidos y positivos.');
      setColor('gray');
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    const imcRedondeado = imc.toFixed(2);

    if (imc < 18.5) {
      setResultado(`Tu IMC es ${imcRedondeado}. Nivel bajo.`);
      setColor('gold'); // amarillo
    } else if (imc >= 18.5 && imc <= 24.9) {
      setResultado(`Tu IMC es ${imcRedondeado}. Nivel normal.`);
      setColor('green');
    } else if (imc >= 25 && imc <= 29.9) {
      setResultado(`Tu IMC es ${imcRedondeado}. Nivel de sobrepeso.`);
      setColor('orange');
    } else {
      setResultado(`Tu IMC es ${imcRedondeado}. Nivel de obesidad.`);
      setColor('red');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>¡¡ Calculadora de Índice de Masa Corporal !!</h1>
      <form onSubmit={calcularIMC}>
        <label htmlFor="peso">¡¡ Ingrese peso en kilos !!</label><br />
        <input type="number" step="any" id="peso" placeholder=" ingrese su peso aqui " required value={peso} onChange={(e) => setPeso(e.target.value)}
        /><br /><br />

        <label htmlFor="altura">¡¡ Ingrese altura en metros ej 1.70  !!</label><br />
        <input type="number" step="any"  id="altura" placeholder="ingrese su altura aqui recuerde el . del ej " required value={altura} onChange={(e) => setAltura(e.target.value)}
        /><br /><br />

        <button type="submit">Calcular</button>
      </form>

      {resultado && (
        <p style={{ marginTop: '20px', color: color, fontWeight: 'bold' }}>
          {resultado}
        </p>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CalculadoraIMC />);
