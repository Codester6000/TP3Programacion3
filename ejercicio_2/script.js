const frutas = ['manzana','banana','pera','durazno','frutilla','mango']
const palabra = document.getElementById('palabra')
const formulario = document.getElementById('formulario')
const error = document.getElementById('error')
const listaPalabras = document.getElementById('listaPalabras')

function mostrarFrutas(frutasMostrar) {
        listaPalabras.innerHTML = ''; 
       
    frutasMostrar.forEach(palabra => {
        const li = document.createElement('li');
        li.textContent = palabra;
        listaPalabras.appendChild(li);
    });
}

mostrarFrutas(frutas)

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
       
    const palabraIngresada = palabra.value.toLowerCase();
        
    const palabrasFiltradas = frutas.filter(fruta => fruta.toLowerCase().includes(palabraIngresada));
        
    if (palabrasFiltradas.length === 0) {
        error.textContent = 'No se encontraron coincidencias';
    } else {
        mostrarFrutas(palabrasFiltradas);
        error.textContent = '';
    }
})
