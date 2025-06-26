const listaOriginal = ["manzana", "banana", "pera", "durazno", "frutilla", "mango", "arándano", "sandía"];

function mostrarListaEnHTML(listaAMostrar) {
    const listaElemento = document.getElementById('listaPalabras');
    listaElemento.innerHTML = '';

    if (listaAMostrar.length === 0) {
        const mensajeVacio = document.createElement('li');
        mensajeVacio.innerText = "No se encontraron resultados.";
        listaElemento.appendChild(mensajeVacio);
        return;
    }

    listaAMostrar.forEach(palabra => {
        const elementoLista = document.createElement("li");
        elementoLista.innerText = palabra;
        listaElemento.appendChild(elementoLista);
    });
}

function filtrarPalabras() {
    const textoFiltro = document.getElementById('textoFiltro').value.trim();
    const mensajeError = document.getElementById('mensajeError');
    
    if (textoFiltro === "") {
        mensajeError.innerText = "";
        mostrarListaEnHTML(listaOriginal); 
        return;
    } else {
        mensajeError.innerText = "";
    }

    const textoFiltroLower = textoFiltro.toLowerCase();

    const resultadosFiltrados = listaOriginal.filter(palabra => 
        palabra.toLowerCase().includes(textoFiltroLower)
    );

    mostrarListaEnHTML(resultadosFiltrados);
}

function mostrarTodasLasPalabras() {
    document.getElementById('textoFiltro').value = "";
    document.getElementById('mensajeError').innerText = "";
    mostrarListaEnHTML(listaOriginal);
}

mostrarListaEnHTML(listaOriginal);