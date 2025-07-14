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
    }else{
        datosGlobales.results.forEach(element => {
        const bookCover = crearElemento("img", "book_cover", null, element.formats["image/jpeg"], `portada de ${element.title}`);
        const coverContainer = crearElemento("div", "cover_container");
        const infoContainer = crearElemento("div", "info_container");
        const title = crearElemento("h3", "book_title", element.title);
        if (element.authors.length > 0){            //Aqui si el array que comprende autor es mayor de 0 (es decir existe) lo almacenamos en una variable aparte para poder acceder facilmente a el y pintarlo
            const autor = element.authors[0];
            const authorText= (autor.birth_year && autor.death_year)
                ?`${autor.name} (${autor.birth_year} - ${autor.death_year})`
                : autor.name;
            const author = crearElemento("h3", "book_author", authorText);
            infoContainer.appendChild(title);
            infoContainer.appendChild(author);
        }
        const bookContainer = crearElemento("div", "book_container");

        coverContainer.appendChild(bookCover);
        bookContainer.appendChild(coverContainer);
        bookContainer.appendChild(infoContainer);
        main.appendChild(bookContainer);
    });
    }
}

pedir();