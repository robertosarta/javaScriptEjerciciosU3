let datosGlobales = null;

async function pedir(){
    try {
        const res = await fetch('https://gutendex.com/books');
        const datos = await res.json();
        datosGlobales = datos;
        imprimir();
    } catch (error) {
        alert(error);
    }
};

function crearElemento(tipo, classElement, text, src, alt,) {
    const elem = document.createElement(tipo);
    if(classElement) elem.className = (classElement);
    if(text) elem.textContent = (text);
    if(src) elem.src = (src);
    if(alt) elem.alt = (alt);
    return elem;
};

function imprimir(){
    const main =  document.querySelector("main");
    if (!datosGlobales){
        alert("no hay datos disponibles todavia");
        return;
    }

    datosGlobales.results.forEach(element => {
        const bookCover = crearElemento("img", "book_cover", null, element.formats["image/jpeg"]);

        main.appendChild(bookCover);
    });
}

pedir();