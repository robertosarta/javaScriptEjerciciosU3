document.getElementById('comicForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const number = document.getElementById('comicNumber').value;
    if(!number) {
        alert('Por favor ingresa un número de cómic');
        return;
    }

    try {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://xkcd.com/${number}/info.0.json`);  //no me daba acceso y me pedia añadir una verificacion ¿cors?, lo busque y actualice el link pero sigo sin poder recibir los datos
        console.log(response);
        if (!response.ok) {
            alert('Cómic no encontrado');
            return;
        }
        const data = await response.json();
        document.getElementById('title').textContent = data.title;
        document.getElementById('date').textContent = `Publicado el: ${data.day}/${data.month}/${data.year}`;
        document.getElementById('comicImage').src = data.img;
        document.getElementById('comicImage').alt = data.alt;
    }catch (error){
        console.error(error);
        alert('Ocurrió un error al cargar el cómic');
    }
});
