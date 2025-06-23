let items = {
        brocha: {
            picture: "https://bellota.b-cdn.net/CMP4506/1/FM3240BI15046_SA_BRPFM100NW_SZ6.png",
            name: "Brocha",
            price: "150€",
            about:
                "Increible brocha, la mejor que hay. Comprala no pierdas el tiempo",
            cart: 0,
            icon: "bi bi-brush-fill",
        },
        Llave: {
            picture: "https://previews.123rf.com/images/bassanini/bassanini1801/bassanini180100023/94158630-chromed-mechanical-key-used-on-a-white-background.jpg",
            name: "Llave",
            price: "13€",
            about:
                "Maravillosa llave, la mejor que hay. Comprala no dudes!",
            cart: 0,
            icon: "bi bi-wrench",
        },
        Martillo: {
            picture: "https://i.etsystatic.com/16310286/r/il/5e7a3f/2135646140/il_340x270.2135646140_fw6x.jpg",
            name: "Martillo",
            price: "4000€",
            about:
                "Un martillo de gran calidad, se dice que fue encontrado en Noruega y lo usaba el mismisimo Thor. Deja de leer y compra ya!",
            cart: 0,
            icon: "bi bi-hammer",
        },
        Tronco: {
            picture: "https://http2.mlstatic.com/D_884145-MLM73916325636_012024-O.jpg",
            name: "Tronco",
            price: "20€",
            about:
                "No se, es un jodido tronco pero a ver... yo me lo compraria esta tirado de precio",
            cart: 0,
            icon: "bi bi-tree-fill",
        },
    };

let nuevoItem = [];
const savedCart = JSON.parse(localStorage.getItem('carrito'));
if (savedCart){
    nuevoItem = savedCart   //actualiza el array desde el otro js
}else {
    let arrayItems = Object.values(items); //lo vuelve a crear si no existe (convierte items en array)
    nuevoItem = arrayItems.map(p => ({
    name: p.name,
    picture: p.picture,
    price: p.price,
    about: p.about,
    cart: p.cart,
    icon: p.icon,
}));
}

/* CREAR OBJETOS EN EL DOM */
const main =  document.querySelector("main");

function crearElemento(tipo, classElement, text, src, alt,) {
    const elem = document.createElement(tipo);
    if(classElement) elem.className = (classElement);
    if(text) elem.textContent = (text);
    if(src) elem.src = (src);
    if(alt) elem.alt = (alt);
    return elem;
};

function crearTarjetaProducto(item){
    const card = crearElemento("div", "section-product_card");
    const containerTitle = crearElemento("div", "product-title");
    const name = crearElemento("h1", "product-name", item.name);
    const price = crearElemento("p", "product-price", item.price);
    const containerImage = crearElemento("div", "product-container_image");
    const picture = crearElemento("img", "product-image", null, item.picture);

    const cartContainer = crearElemento("div", "product-cart");
    const cartTextContainer = crearElemento("div", "product-cart_text-container");
    const cartText = crearElemento("p", null, item.about);

    const productContainer = crearElemento("div", "product-cart_container");
    const unitsContainer = crearElemento("div", "product-units_container");
    const units = crearElemento("p", "product-units", item.cart || "0"); //quizas el || 0  se puede quitar (revisar)
    const icon = crearElemento("i", "product-icon bi bi-basket2-fill");

    const buttonContainer = crearElemento("div", "product-button_container");
    const buttonPlus = crearElemento("button", "product-button");
    const plusIcon = crearElemento("i", "bi bi-plus-lg");
    const buttonMinus = crearElemento("button", "product-button");
    const minusIcon = crearElemento("i", "bi bi-dash-lg");

    buttonPlus.appendChild(plusIcon);
    buttonMinus.appendChild(minusIcon);
    buttonContainer.append(buttonPlus, buttonMinus);

    unitsContainer.append(units, icon);
    productContainer.append(unitsContainer, buttonContainer);
    cartTextContainer.appendChild(cartText);
    cartContainer.append(cartTextContainer, productContainer);

    containerTitle.append(name, price);
    containerImage.appendChild(picture);
    card.append(containerTitle,containerImage, cartContainer);

    buttonPlus.addEventListener("click", () => {
        item.cart ++;
        units.textContent = item.cart;
        localStorage.setItem('carrito', JSON.stringify(nuevoItem));
    })
    buttonMinus.addEventListener("click", () => {
        if (item.cart >= 1){
            item.cart --;
            units.textContent = item.cart;
            localStorage.setItem('carrito', JSON.stringify(nuevoItem));
        }
    })

    return card;
}

nuevoItem.forEach(producto => {
    const card = crearTarjetaProducto(producto);
    main.appendChild(card);
});
/* CREAR OBJETOS EN EL DOM */

