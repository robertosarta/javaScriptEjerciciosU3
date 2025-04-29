
//Ejercicio 1//
let edad = 28;
edad = 32;

const vel_luz = 299792458;
//vel_luz = 1//  //daria un fallo, no puede reasignarse una constante//


//he dejado todo comentado para poder ir "activando" cada ejercicio por separado dejando sin comentar solo lo que necesitaba y asi no hacer un follon con las funciones repetidas.
/*
//Ejercicio 2//
let nombre = "robertoMartinezResano"  //da error, no pueden comenzar con número, si con "$" o "_"//
let color = "rojoBurdeos"
let pueblo =  "sartaguda"

//Ejercicio 3//
let numeroEntero = 1;
let numeroDecimal = 1.5;
let cadenaEscrita = "mi nombre es Roberto";
let ejercicioBool = true;
let ejercicioNull = null;

console.log(typeof numeroEntero, "COMPLETADO");
console.log(typeof numeroDecimal, "COMPLETADO");
console.log(typeof cadenaEscrita, "COMPLETADO");
console.log(typeof ejercicioBool,"COMPLETADO");
console.log(typeof ejercicioNull, "COMPLETADO");
console.log(ejercicioNull===null) //Para comprobarlo, si no a causa de un error historico de JS nos devolveria un "object"//

//Ejercicio 4//
let sinValor;
let vacio = null;

console.log(typeof sinValor); //aqui nos devuelve undefined que quiere decir que es una variable que no tiene nada asignado
console.log(typeof vacio); //aqui devuelve object por el error comentado en el ej.3 y quiere decir que tiene un valor asignado pero es nulo porque asi lo hemos decidido


//Ejercicio 5//
let x = 10;
let y = 3;

console.log(x+y)  //espero 13
console.log(x-y)  //espero 7
console.log(x*y)  //espero 30
console.log(x/y)  //espero 3.3333333333333335
console.log(x%y)  //espero 1


//Ejercicio 6//
let z = 20;

z += 5;
z -= 10;
z *= 2;
z /= 3;
z %= 4;

console.log(z)  //acaba dando 2, yo esperaba 2,5 pero por lo visto el resto no usa numeros decimales.


//Ejercicio 7//
let a = 5;
let b = "5";

console.log(a==b) //Da true porque compara solo los valores convirtiendo los tipos de modo que el string se convierte en numero
console.log(a===b) //Da false porque compara tipos ademas de los valores, es una comparación estricta
console.log(a!=b) //Ocurre lo mismo que en la primera pero al reves porque en vez de simplemente comparar estamos negando esa comparación
console.log(a!==b) //Ocurre lo mismo que en el segundo, compara tipos y valores pero de nuevo negando lo que ocurre por tanto detecta que efectivamente es cierto que la afirmacion que le estamos pasando es falsa


//Ejercicio 8//
let esMayorDeEdad = true;
let tieneLicencia = false;
let puedeConducir = esMayorDeEdad && tieneLicencia; //puedeConducir solo puede ser true si las otras dos variables que hemos puesto son correctas por efecto de "&&" que seria un comparador lógico (Y logico)

console.log(puedeConducir)

let tieneCarnetProvisional = true;
let acceso = tieneLicencia || tieneCarnetProvisional; //Es un comparador logico, "X" o "y" son ciertas, mientras una de las opciones que le damos lo sea nos devuelve true (O logico)

console.log(acceso)


//Ejercicio 9//
let nombre = "Roberto";
let edad = "28";
let saludo = `Hola, me llamo ${nombre} y tengo ${edad} años.`;
console.log(saludo)


//Ejercicio 10//
let numeroTexto = "123";
let suma = numeroTexto + 10; //Aqui da 12310 porque la funcion de sumar concatena elementos y convierte nuestro 10 en string como el que hay en numeroTexto
let resta = numeroTexto -10; //En cuanto al operador de resta solo funciona con numeros por lo que convierte nuestro string numeroTexto para poder restarlo.

console.log(suma);
console.log(resta);
*/

//Ejercicio 11//
let persona = {
    nombre: "Roberto",
    edad: "28",
    ciudad: "Sartaguda",
}
