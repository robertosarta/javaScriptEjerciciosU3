let nombreBuscado = prompt("Dame un nombre (Roberto para probar ejercicio)").toLowerCase();
let div = document.getElementById("divEjercicio");
let persona = Object.values(personas).find(p => p.name.toLowerCase() === nombreBuscado);

if (persona) {
    div.style.backgroundColor = persona.eyeColor;
    div.innerHTML = `
    <img src="${persona.picture}" alt="picture de ${persona.name}">
    <h1>${persona.name} </h1>
    <p>Edad: ${persona.age} </p>
    <p>Email: ${persona.email} </p>
    <p>Direccion: ${persona.address} </p>
    `
}else {
    div.innerHTML = `<h2>Persona no encontrada</h2>`;
    div.style.backgroundColor = "#444";
}