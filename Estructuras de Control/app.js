var nombre = 'Paola';
var estadoCasada = true;
var profesion = 'Ingeniera';
var maestria = 'Ciencia de Datos';
var estadoGradoMaestria = true;
if (estadoCasada == true){
    console.log(nombre + " esta casad@");
}

// Ejemplo if ... else
if (estadoGradoMaestria == true){
    console.log('La ' + profesion + ' ' + nombre + ' ' + 'esta graduada en la maestria de ' + maestria);
} else {
    console.log('La ' + profesion + ' ' + nombre + ' ' + 'aun esta cursando la maestria en ' + maestria);
}

//Variables punto 1
var nombre = 'Ricardo';
var profesion = 'Profesor';


//Variables punto 2
var nombre2 = 'Luis';
var estadoSoltero = true;

//Variables punto 3
let valor1 = 7;
let valor2 = 8;
let valor3 = 911;
let valor4 = 100;

//Ejercicio 1
if (profesion == 'Profesor'){
    console.log(nombre + ' ' + 'es' + ' ' + profesion);
}

//Ejercicio 2
if (estadoSoltero == true){
    console.log(nombre2 + ' ' + 'esta soltero.');
} else {
    console.log(nombre2 + ' ' + 'esta casado.');
}

//Ejercicio 3
if (valor1 % 2 == 0){
    console.log('El numero ' + valor1 + ' ' + 'es par')
} else {
    console.log('El numero ' + valor1 + ' ' + 'es impar')
}

if (valor2 % 2 == 0){
    console.log('El numero ' + valor2 + ' ' + 'es par')
} else {
    console.log('El numero ' + valor2 + ' ' + 'es impar')
}

if (valor3 % 2 == 0){
    console.log('El numero ' + valor3 + ' ' + 'es par')
} else {
    console.log('El numero ' + valor3 + ' ' + 'es impar')
}

if (valor4 % 2 == 0){
    console.log('El numero ' + valor4 + ' ' + 'es par')
} else {
    console.log('El numero ' + valor4 + ' ' + 'es impar')
}


/*
Operadores logicos ( && = And = y )
And = && = y = Conjunción 
Or = || = o = Disyunción
Not = ! = No = Negación
*/

/*Ejercicio 1
Para poder ir a cine necesitamos de dos cosas primero tener una entrada y la otra llegar al cine a tiempo */

//Escenario 1: compramos la entrada para la película, pero no encontramos transporte para llegar a cine
var  e1Entrada = true;
var e1Transporte = false;

if((e1Entrada == true) && (e1Transporte == true)){
    console.log('Pudimos ver la película')
} else {
    console.log('No pudimos ver la película :(')
}

//Escenario 2: no teníamos dinero para la entrada ni para el transporte

var e2Entrada = false;
var e2Transporte = false;

if ((e2Entrada == true) && (e2Transporte == true)) {
    console.log('Pudimos ver la película')
} else {
    console.log('No pudimos ver la película :(')
}

//Escenario 3: Pudimos llegar a cine, pero las entradas estaban agotadas

var e3Entrada = false;
var e3Transporte = true;

if ((e3Entrada == true) && (e3Transporte == true)) {
    console.log('Pudimos ver la película')
} else {
    console.log('No pudimos ver la película :(')
}

//Escenario 4: Compramos la entrada por la página y llegamos a tiempo al cine

var e4Entrada = true;
var e4Transporte = true;

if ((e4Entrada == true) && (e4Transporte == true)) {
    console.log('Pudimos ver la película')
} else {
    console.log('No pudimos ver la película :(')
}

/*Ejercicio 2: Los vendedores reciben un bono de acuerdo a su desempeño en las ventas al final del mes, si los 5 millones en ventas o consiguen más clientes, ganarán 500.000 de bono. (|| = or = o)*/

// Escenario 1: No hay clientes nuevos, pero se vendieron $6.500.000

var e1Venta = 6500000;
var e1ClienteNuevo = false;
var bono = 500000;

if((e1Venta > 5000000) || (e1ClienteNuevo == true)){
    console.log('El vendedor tendrá una bonificación de $' + bono);
} else {
    console.log('El vendedor no tendrá una bonificación este mes');
}

//Escenario 2: Se consiguieron do clientes nuevos, pero las ventas fueron de $4.500.000

var e2Venta = 4500000;
var e2ClienteNuevo = true;
var bono = 500000;

if((e2Venta > 5000000) || (e2ClienteNuevo == true)){
    console.log('El vendedor tendrá una bonificación de $' + bono);
} else {
    console.log('El vendedor no tendrá una bonificación este mes');
}

//Escenario 3: Tenemos clientes nuevos y sí se vendieron $10.000.000

var e3Venta = 10000000;
var e2ClienteNuevo = true;
var bono = 500000;

if((e3Venta > 5000000) || (e3ClienteNuevo == true)){
    console.log('El vendedor tendrá una bonificación de $' + bono);
} else {
    console.log('El vendedor no tendrá una bonificación este mes');
}

//Escenario 4: no hay clientes nuevos y solo se vendió $1.500.000

var e4Venta = 1500000;
var e4ClienteNuevo = false;
var bono = 500000;

if((e4Venta > 5000000) || (e4ClienteNuevo == true)){
    console.log('El vendedor tendrá una bonificación de $' + bono);
} else {
    console.log('El vendedor no tendrá una bonificación este mes');
}

//NOT

var a = true;
var b = false;

    console.log('Inicialmente la variable "a" es:' + a);

    a =!a //aplicar el "not" a la variable "a"
    console.log('Aplicando el NOT-- la variable "a" cambia a:' + a);

    console.log('Inicialmente la variable "b" es:' + b);

    b =!b //aplicar el "not" a la variable "a"
    console.log('Aplicando el NOT-- la variable "b" cambia a:' + b);

//Ejercicio: los empleados recibirán un bono extra si trabajan al menos 10 domingos al año, usar operador "not" para lograr el resultado correcto

/*Ernesto trabajó 12 domingos
Claudia trabajó 9 domingos
Miguel trabajó 20 domingos
Andrea no trabajó ningún domingo*/

// Variables que definen la cantidad de domingos trabajados por cada empleado y los domingos requeridos para el bono
let domingosErnesto = 12;
let domingosClaudia = 9;
let domingosMiguel = 20;
let domingosAndrea = 0;
let domingosRequeridos = 10;

// Verificación de quién recibe el bono usando el operador "not"
if (!(domingosErnesto < domingosRequeridos)) {
    console.log("Ernesto recibe el bono, trabajó los domingos requeridos.");
} else {
    console.log("Ernesto no recibe el bono.");
}

if (!(domingosClaudia < domingosRequeridos)) {
    console.log("Claudia recibe el bono, trabajó los domingos requeridos.");
} else {
    console.log("Claudia no recibe el bono.");
}

if (!(domingosMiguel < domingosRequeridos)) {
    console.log("Miguel recibe el bono, trabajó los domingos requeridos.");
} else {
    console.log("Miguel no recibe el bono.");
}

if (!(domingosAndrea < domingosRequeridos)) {
    console.log("Andrea recibe el bono, trabajó los domingos requeridos.");
} else {
    console.log("Andrea no recibe el bono.");
}
