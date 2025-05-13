let  nombres = [
    prompt("Dime un planeta del sistema solar del que quieras información").toLowerCase(),
    prompt("Dime otro planeta del sistema solar del que quieras información").toLowerCase(),
    prompt("Dime otro planeta del sistema solar del que quieras información").toLowerCase()
];
nombres.forEach((nombrePlaneta, i) => {
    let nombreDiv = document.getElementById(`nombre${i + 1}`);
    let imagenDiv = document.getElementById(`imagen${i + 1}`);
    let caracteristicasDiv = document.getElementById(`caracteristicas${i + 1}`);

    if (sistemaSolar[nombrePlaneta]) {
        let planeta = sistemaSolar[nombrePlaneta];

        nombreDiv.innerHTML = `<h2>${planeta.nombre}</h2>`;
        imagenDiv.innerHTML = `<div class = "imagen-container">
        <img src = "${planeta.imagen}" alt = "Imagen de ${planeta.nombre}" class="imagen">
        </div>`;
        caracteristicasDiv.innerHTML = `
        <ul>
            <li><strong>Color:</strong> ${planeta.color}</li>
            <li><strong>Temperatura:</strong> ${planeta.temperatura} ºC</li>
        </ul>`;
    }else {
        nombreDiv.innerHTML = `<p style="color:red;"> "${nombrePlaneta}" no está en la lista.</p>`;
        imagenDiv.innerHTML = "";
        caracteristicasDiv.innerHTML = "";
    }

});