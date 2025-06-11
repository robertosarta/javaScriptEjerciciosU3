let arrayPersonas = Object.values(personas);  //convierte personas en array

let nuevaPersona = arrayPersonas.map(p => ({
    name: p.name,
    image: p.image,
    age: p.age,
    email: p.email,
    address: p.address,
    eyeColor: p.eyeColor
}));  //Esto genera un objeto nuevo a partir del que ya existe para mantener inmutable el primer objeto

const cardContainer =  document.getElementById("containerUser");
const inputNumArray = document.getElementById("inputNum");
const inputTextArray = document.getElementById("inputText");
const buttonSearchArray = document.querySelectorAll(".button-search_array");

function normalizarTexto(text) {
    return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
}
function crearElemento(tipo, classElement, text, src, alt) {
    const elem = document.createElement(tipo);
    if(classElement) elem.className = (classElement);
    if(text) elem.textContent = (textContent);
    if(src) elem.src = (src);
    if(alt) elem.alt = (alt);
    return elem;
}
function buscar() {
    const n = parseInt(inputNumArray.value);
    const t = inputTextArray.value.toLowerCase();
    if (!isNaN(n) && n >= 0 && n < nuevaPersona.length){
        cardContainer.innerHTML = "";
        const userImage = crearElemento("img", ".containerUser-image", null, nuevaPersona[n].image, "user photo");
        const userName = crearElemento("h1", ".containerUser-name", nuevaPersona[n].name);
        const userAge = crearElemento("p", ".containerUser-age", nuevaPersona[n].age);
        const userEmail = crearElemento("p", ".containerUser-email", nuevaPersona[n].email);
        const userAddress = crearElemento("p", ".containerUser-address", nuevaPersona[n].address);
        const userEyeColor = crearElemento("p", ".containerUser-eyeColor", nuevaPersona[n].eyeColor);
    } else if (inputTextArray){
        cardContainer.innerHTML = "";
        const userFound = nuevaPersona.find(persona => normalizarTexto(persona.name).includes(normalizarTexto(t)));
        if (userFound){
            const userImage = crearElemento("img", ".containerUser-image", null, userFound.image, "user photo");
            const userName = crearElemento("h1", ".containerUser-name", userFound.name);
            const userAge = crearElemento("p", ".containerUser-age", userFound.age);
            const userEmail = crearElemento("p", ".containerUser-email", userFound.email);
            const userAddress = crearElemento("p", ".containerUser-address", userFound.address);
            const userEyeColor = crearElemento("p", ".containerUser-eyeColor", userFound.eyeColor);
        }else{
            alert("No se ha encontrado a nadie con ese nombre");
        }
    } else {
        alert("has introducido un valor invalido");
    }
}

buttonSearchArray.forEach.(btn => btn.addEventListener("click", buscar));
inputNumArray.addEventListener("keydown", (e) => {
    if (e.key === "Enter") buscar();
});
inputTextArray.addEventListener("keydown", (e) => {
    if (e.key === "Enter") buscar();
});