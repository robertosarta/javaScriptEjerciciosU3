let arrayPersonas = Object.values(personas);  //convierte personas en array

let nuevaPersona = arrayPersonas.map(p => ({
    name: p.name,
    image: p.image,
    age: p.age,
    email: p.email,
    address: p.address,
    eyeColor: p.eyeColor
}));  //Esto genera un objeto nuevo a partir del que ya existe para mantener inmutable el primer objeto

console.log(nuevaPersona);