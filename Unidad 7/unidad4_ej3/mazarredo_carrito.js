let nuevoItem = [];
const savedCart = JSON.parse(localStorage.getItem('carrito'));
if (savedCart){
    nuevoItem = savedCart  //actualiza el array desde el otro js
}else {
    const arrayItems = Object.values(items); //lo vuelve a crear si no existe (convierte items en array)
    nuevoItem = arrayItems.map(p => ({
    name: p.name,
    picture: p.picture,
    price: p.price,
    about: p.about,
    cart: p.cart,
    icon: p.icon,
}));
}

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
    const cartSection = crearElemento("div", "cart-section");
    const cartContainer = crearElemento("div", "cart-section-container");
    const cartContainerImage = crearElemento("img", "cart-section-container_image", null, item.picture);
    const cartName = crearElemento("p", "cart-section-name", `${item.name}: ${item.cart}`);

    const cartInfo = crearElemento("div", "cart-section-info");
    const cartIcons = crearElemento("div", "cart-section-icons");
    const cartButtons = crearElemento("div", "cart-section-buttons");
    const buttonPlus = crearElemento("button", "cart-button");
    const plusIcon = crearElemento("i", "bi bi-plus-lg");
    const buttonMinus = crearElemento("button", "cart-button");
    const minusIcon = crearElemento("i", "bi bi-dash-lg");

    buttonPlus.appendChild(plusIcon);
    buttonMinus.appendChild(minusIcon);
    cartButtons.append(buttonPlus, buttonMinus);
    cartInfo.append(cartIcons, cartButtons);

    cartContainer.appendChild(cartContainerImage);
    cartSection.append(cartContainer, cartName,cartInfo);

    cartIcons.innerHTML = "";
    for (let i = 0; i < item.cart; i++) {
        const icon = crearElemento("i", item.icon);
        cartIcons.appendChild(icon);        
    }

    buttonPlus.addEventListener("click", () => {
        item.cart ++;
        cartName.textContent = `${item.name}: ${item.cart}`;
        cartIcons.innerHTML = "";
        for (let i = 0; i < item.cart; i++) {
            const icon = crearElemento("i", item.icon);
            cartIcons.appendChild(icon);
        }
        localStorage.setItem('carrito', JSON.stringify(nuevoItem));
    })
    buttonMinus.addEventListener("click", () => {
        if (item.cart >= 1){
            item.cart --;
            cartName.textContent = `${item.name}: ${item.cart}`;

            cartIcons.innerHTML = "";
            for (let i = 0; i < item.cart; i++) {
                const icon = crearElemento("i", item.icon);
                cartIcons.appendChild(icon);
            }
            localStorage.setItem('carrito', JSON.stringify(nuevoItem));
        }
    })

    return cartSection;
}

nuevoItem.forEach(producto => {
    if (producto.cart >= 1){
        const card = crearTarjetaProducto(producto);
        main.appendChild(card);
    }
});