async function pedir(){
    try {
        const numeroAleatorio = () => Math.floor(Math.random() * 500) + 1;
        const res = await fetch(`https://api.disneyapi.dev/character/${numeroAleatorio}`);
        const datos = await res.json();
        datosGlobales = datos;
        // imprimir();
    } catch (error) {
        alert(error);
    }
};