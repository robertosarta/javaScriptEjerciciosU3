const inputElement = document.querySelector(".search-input");
const buttonElement = document.querySelector(".search-button");
const sectionPlanets = document.querySelector(".section-planets");
const planetasAgregados = [];

function createElement(el, elClass, src, textContent) {
    const newEl = document.createElement(el);
    if(elClass) newEl.className = (elClass);  
    if(src) newEl.src = (src);
    if(textContent) newEl.textContent = (textContent);
    return newEl;
}
function buscar() {
    const inputValue = inputElement.value.toLowerCase();
    const planeta = sistemaSolar[inputValue];
    const planetaColor = sistemaSolar[inputValue].color;
    const planetaTemperatura = sistemaSolar[inputValue].temperatura;
    if(!planeta){
        alert("Planeta no encontrado!");
        return;
    }

    if (planetasAgregados.includes(planeta.nombre.toLowerCase())){
        alert("Tu planeta ya esta en la lista!");
        return;
    }
    planetasAgregados.push(planeta.nombre.toLowerCase());

    const sectionPlanetsContainer = createElement("div", "section-planets_container");
    const planetsContainerName = createElement("div", "planets-container_name");
    const planetName = createElement("h3", null, null, planeta.nombre);
    sectionPlanets.appendChild(sectionPlanetsContainer);
    sectionPlanetsContainer.appendChild(planetsContainerName);
    planetsContainerName.appendChild(planetName);

    const planetsContainerImage = createElement("div", "planets-container_image");
    const planetsContentImage = createElement("img", "planets-content_image", planeta.imagen);
    sectionPlanetsContainer.appendChild(planetsContainerImage);
    planetsContainerImage.appendChild(planetsContentImage);

    const planetsContainerList = createElement("div", "planets-container_list");
    const uList = createElement("ul");
    const listElement1 = createElement("li", "list-element", null, `Color: ${planetaColor}`);
    const listElement2 = createElement("li", "list-element", null, `Temperatura: ${planetaTemperatura}º`);
    sectionPlanetsContainer.appendChild(planetsContainerList);
    planetsContainerList.appendChild(uList);
    uList.appendChild(listElement1);
    uList.appendChild(listElement2);

    const planetsContainerButton = createElement("div", "planets-container_button");
    const buttonColor = createElement("button", "button-color", null, "Cambiar color");
    sectionPlanetsContainer.appendChild(planetsContainerButton);
    planetsContainerButton.appendChild(buttonColor);

    let colorChange = false;
    buttonColor.addEventListener("click", () => {
        if (!colorChange){
            sectionPlanetsContainer.style.backgroundColor = planeta.colorBoton;
        }else {
            sectionPlanetsContainer.style.backgroundColor = "#343a40";
        }
        colorChange = !colorChange;
    });
};
buttonElement.addEventListener("click", buscar);
inputElement.addEventListener("keydown", (e) => {
    if (e.key === "Enter") buscar();
});

