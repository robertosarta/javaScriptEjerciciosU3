let datosGlobales = null;
let charName = document.querySelector(".char-name");
let charId = document.querySelector(".char-id");
let charImg = document.querySelector(".char-img");
let charFilms = document.querySelector(".char-films");
let charButton = document.querySelector(".char-button");
async function pedir(){
    try {
        const numeroAleatorio = Math.floor(Math.random() * 500) + 1;
        const res = await fetch(`https://api.disneyapi.dev/character/${numeroAleatorio}`);
        const datos = await res.json();

        // console.log(datos);
        return datos;
    } catch (error) {
        alert(error);
    }
};

async function gestionarDatos() {
    try {
        const personaje = await pedir();
        charName.textContent = personaje.data.name;
        charId.textContent = personaje.data._id;
        charImg.src = personaje.data.imageUrl;
        
        if (personaje.data.films.length === 0) {
            charFilms.textContent = "No tiene películas registradas";
        } else {
            charFilms.textContent = personaje.data.films.join(", ");
        }
    } catch (error) {
        alert("No se ha podido obtener el personaje")
    }
}

charButton.addEventListener("click", () => {gestionarDatos();});