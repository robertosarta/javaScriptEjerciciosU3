const select = document.getElementById("planets");
const charactersDiv = document.getElementById("characters");

//Cargar lista de planetas
async function loadPlanets() {
    let url = "https://rickandmortyapi.com/api/location";
    while (url) {
        const res = await fetch(url);
        const data = await res.json();

    data.results.forEach(loc => {
        if (loc.type === "Planet") {
            const option = document.createElement("option");
            option.value = loc.id;
            option.textContent = loc.name;
            select.appendChild(option);
        }
    });
        
    url = data.info.next;
    }
}

// Evento al cambiar el planeta
select.addEventListener("change", async (e) => {
    const planetId = e.target.value;
    charactersDiv.innerHTML = "";

    if(!planetId) return;

    const res = await fetch(`https://rickandmortyapi.com/api/location/${planetId}`);
    const data = await res.json();

    if (data.residents.length === 0) {
        charactersDiv.innerHTML = "<p>No hay personajes en este planeta.</p>";
        return;
    }
    
    //Traer personajes
    for (let url of data.residents) {
        const resChar = await fetch(url);
        const char = await resChar.json();

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${char.image}" alt="${char.name}">
            <h3>${char.name}</h3>
            <p>${char.species}</p>
            `;
        charactersDiv.appendChild(card);
    }
});

loadPlanets();