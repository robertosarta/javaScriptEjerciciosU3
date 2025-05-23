/*
//Ejercicio 1
function saludoTriple(){
    console.log(`hola`);
    console.log(`hola`);
    console.log(`hola`);
}

console.log(saludoTriple());

//Ejercicio 2
function saludar(num){
    for (let i = 0; i < num; i++) {
        console.log("hola");
    }
}
console.log(saludar(5));
console.log(saludar(3));

//Ejercicio 3 
function sumar(a, b){
    return a + b;
}
console.log(sumar(1, 3));

//Ejercicio 4
function sumar(a, b){
    return a + b;
}

let numero1 = 4
let numero2 = 4

numero1 = Number(numero1);  //Es innecesario pero por acostumbrarme a poner el "Number" o "parseFloat"
numero2 = Number(numero2);  //Es innecesario pero por acostumbrarme a poner el "Number" o "parseFloat"

let resultado = sumar(numero1, numero2);
console.log("el resultado de la suma es:", resultado);

//Ejercicio 5
let comparacion;
function primeroMin(a, b){
    a > b? comparacion = true : comparacion = false;
}
primeroMin(8, 2);
console.log(comparacion);

if (comparacion === true){
    console.log("El primr numero es mas grande")
}else {
    console.log("El primer numero no es mas grande")
}

//Ejercicio 6
//Esta en .html

//Ejercicio 7
//Esta en .html

//Ejercicio 8
//Esta en .html

//EXTRAS
//Ejercicio 1
    function temporizador(segundos,callback) {
        setTimeout(() => {
            callback();
        }, segundos);
    }
    function saludar(nombre) {
        console.log(`hola buenas ${nombre}`);
    }

    temporizador(5000, () => saludar("Roberto"));

//Ejercicio 2
function descargarDatos() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let exito = Math.random() >= 0.3;
            if (exito) {
                resolve("datos descargados exitosamente");
            }else {
                reject("Error al descargar los datos");
            }
        }, 2000);
    })
}

descargarDatos()
.then(mensaje => {console.log(mensaje)})
.catch(error => {console.log(error)});

//Ejercicio 3
console.log("Consigue un total de 10!");
let resultado;
function operacion1(a, b) {
    resultado = (a + b);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (resultado === 10){
                resolve("Felicidades, has conseguido un resultado de 10");
            }else {
                reject(`Lo sentimos, su resultado da un total de ${resultado}`);
            }
        }, 1000);
    })
}

function operacion2(a, b) {
    resultado = (a * b);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (resultado === 10){
                resolve("Felicidades, has conseguido un resultado de 10");
            }else {
                reject(`Lo sentimos, su resultado da un total de ${resultado}`);
            }
        }, 1000);
    })
}

function operacion3(a, b) {
    resultado = (a / b);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (resultado === 10){
                resolve("Felicidades, has conseguido un resultado de 10");
            }else {
                reject(`Lo sentimos, su resultado da un total de ${resultado}`);
            }
        }, 1000);
    })
}
//Aqui no super como hacer que si fallaban la primera o la segunda siguiese ejecutandose, en cuanto una fallaba paraba.
operacion1(5, 5)
.then(mensaje => {
    console.log("operacion 1:", mensaje);
    return operacion2(2, 5);
})
.then(mensaje => {
    console.log("Operacion 2:", mensaje);
    return operacion3(10, 10);
})
.then(mensaje => {
    console.log("Operacion 3:", mensaje);
})
.catch(error => {
    console.log("error:", error)
});
*/
//Ejercicio 4
