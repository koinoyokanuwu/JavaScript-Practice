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

//If anidados
//Es una sentencia if que está dentro de otro if o else. 

/*Ejercicio 1: 
 - Pablo tiene 10 años
 - Gabriel tiene 65 años
 - Carlos tiene 18 años
 - Henry tiene 45 años
 - Andrea tiene 15 años 

 Condiciones:

 - Niño hasta los 10 años
 - Adolescente hasta los 17 años
 - Adulto desde los 18 hasta los 59 años
 - Adulto mayor a partir de los 60 años */

 let edadPablo = 10;

if(edadPablo <=10){
    console.log('Pablo es un niño');
} else if ((edadPablo >10) && (edadPablo<18)){
    console.log('Pablo es un adolescente');
} else if ((edadPablo >=18) && (edadPablo<60)){
    console.log('Pablo es un adulto');
}else if((edadPablo>=60)){
    console.log('Pablo es un adulto mayor')
}
    
let edadGabriel = 65;

if(edadGabriel <=10){
    console.log('Gabriel es un niño');
} else if ((edadGabriel>10) && (edadGabriel<18)){
    console.log('Gabriel es un adolescente');
} else if ((edadGabriel >=18) && (edadGabriel<60)){
    console.log('Gabriel es un adulto');
}else if((edadGabriel>=60)){
    console.log('Gabriel es un adulto mayor')
}


let edadCarlos = 18;

if(edadCarlos <=10){
    console.log('Carlos es un niño');
} else if ((edadCarlos>10) && (edadCarlos<18)){
    console.log('Carlos es un adolescente');
} else if ((edadCarlos >=18) && (edadCarlos<60)){
    console.log('Carlos es un adulto');
}else if((edadCarlos>=60)){
    console.log('Carlos es un adulto mayor')}

 
let edadHenry = 45;

if(edadHenry <=10){
    console.log('Henry es un niño');
} else if ((edadHenry>10) && (edadHenry<18)){
    console.log('Henry es un adolescente');
} else if ((edadHenry >=18) && (edadHenry<60)){
    console.log('Henry es un adulto');
}else if((edadHenry>=60)){
    console.log('Henry es un adulto mayor')}


 
 let edadAndrea = 15;

 if (edadAndrea <=10){
    console.log('Andrea es una niña');
 } else if ((edadAndrea>10) && (edadAndrea<18)){
    console.log('Andrea es una adolescente');
 } else if((edadAndrea >=18) && (edadAndrea <60)){
    console.log('Andrea es una adulta');
 } else if ((edadAndrea >=60)){
    console.log('Andrea es una adulta mayor');
 }

//Cambiando las edades

edadPablo = 24;

if(edadPablo <=10){
    console.log('Pablo es un niño');
} else if ((edadPablo >10) && (edadPablo<18)){
    console.log('Pablo es un adolescente');
} else if ((edadPablo >=18) && (edadPablo<60)){
    console.log('Pablo es un adulto');
}else if((edadPablo>=60)){
    console.log('Pablo es un adulto mayor')
}
    
edadGabriel = 95;

if(edadGabriel <=10){
    console.log('Gabriel es un niño');
} else if ((edadGabriel>10) && (edadGabriel<18)){
    console.log('Gabriel es un adolescente');
} else if ((edadGabriel >=18) && (edadGabriel<60)){
    console.log('Gabriel es un adulto');
}else if((edadGabriel>=60)){
    console.log('Gabriel es un adulto mayor')
}


edadCarlos = 1;

if(edadCarlos <=10){
    console.log('Carlos es un niño');
} else if ((edadCarlos>10) && (edadCarlos<18)){
    console.log('Carlos es un adolescente');
} else if ((edadCarlos >=18) && (edadCarlos<60)){
    console.log('Carlos es un adulto');
}else if((edadCarlos>=60)){
    console.log('Carlos es un adulto mayor')}

 
edadHenry = 17.5;

if(edadHenry <=10){
    console.log('Henry es un niño');
} else if ((edadHenry>10) && (edadHenry<18)){
    console.log('Henry es un adolescente');
} else if ((edadHenry >=18) && (edadHenry<60)){
    console.log('Henry es un adulto');
}else if((edadHenry>=60)){
    console.log('Henry es un adulto mayor')}


 
 edadAndrea = 59.9;

 if (edadAndrea <=10){
    console.log('Andrea es una niña');
 } else if ((edadAndrea>10) && (edadAndrea<18)){
    console.log('Andrea es una adolescente');
 } else if((edadAndrea >=18) && (edadAndrea <60)){
    console.log('Andrea es una adulta');
 } else if ((edadAndrea >=60)){
    console.log('Andrea es una adulta mayor');
 }

 /*Ejercicio 2

 - Luis:5
 - Carlos 9.5
 - Camila 6.9
 - Ricardo 8
 - Luisa 9.2 
 - Andrés 3

 Condiciones:
 - Entre 0 y 3: Muy deficiente
 - Más de 3 pero menos de 5: Insuficiente
 - Entre 5 y 6: Suficiente
 - Más de 6 pero menos de 7: Bien
 - Entre 7 y 9: Notable
 - Más de nueve hasta 10: Sobresaliente */

 // Calificaciones de los estudiantes
var luis = 5;
var carlos = 9.5;
var camila = 6.9;
var ricardo = 8;
var luisa = 9.2;
var andres = 3;

// Clasificación de Luis
if (luis >= 0 && luis <= 3) {
    console.log('La nota de Luis es: Muy deficiente');
} else if (luis > 3 && luis < 5) {
    console.log('La nota de Luis es: Insuficiente');
} else if (luis >= 5 && luis <= 6) {
    console.log('La nota de Luis es: Suficiente');
} else if (luis > 6 && luis < 7) {
    console.log('La nota de Luis es: Bien');
} else if (luis >= 7 && luis <= 9) {
    console.log('La nota de Luis es: Notable');
} else if (luis > 9 && luis <= 10) {
    console.log('La nota de Luis es: Sobresaliente');
} else {
    console.log('La nota de Luis es: Nota no válida');
}

// Clasificación de Carlos
if (carlos >= 0 && carlos <= 3) {
    console.log('La nota de Carlos es: Muy deficiente');
} else if (carlos > 3 && carlos < 5) {
    console.log('La nota de Carlos es: Insuficiente');
} else if (carlos >= 5 && carlos <= 6) {
    console.log('La nota de Carlos es: Suficiente');
} else if (carlos > 6 && carlos < 7) {
    console.log('La nota de Carlos es: Bien');
} else if (carlos >= 7 && carlos <= 9) {
    console.log('La nota de Carlos es: Notable');
} else if (carlos > 9 && carlos <= 10) {
    console.log('La nota de Carlos es: Sobresaliente');
} else {
    console.log('La nota de Carlos es: Nota no válida');
}

// Clasificación de Camila
if (camila >= 0 && camila <= 3) {
    console.log('La nota de Camila es: Muy deficiente');
} else if (camila > 3 && camila < 5) {
    console.log('La nota de Camila es: Insuficiente');
} else if (camila >= 5 && camila <= 6) {
    console.log('La nota de Camila es: Suficiente');
} else if (camila > 6 && camila < 7) {
    console.log('La nota de Camila es: Bien');
} else if (camila >= 7 && camila <= 9) {
    console.log('La nota de Camila es: Notable');
} else if (camila > 9 && camila <= 10) {
    console.log('La nota de Camila es: Sobresaliente');
} else {
    console.log('La nota de Camila es: Nota no válida');
}

// Clasificación de Ricardo
if (ricardo >= 0 && ricardo <= 3) {
    console.log('La nota de Ricardo es: Muy deficiente');
} else if (ricardo > 3 && ricardo < 5) {
    console.log('La nota de Ricardo es: Insuficiente');
} else if (ricardo >= 5 && ricardo <= 6) {
    console.log('La nota de Ricardo es: Suficiente');
} else if (ricardo > 6 && ricardo < 7) {
    console.log('La nota de Ricardo es: Bien');
} else if (ricardo >= 7 && ricardo <= 9) {
    console.log('La nota de Ricardo es: Notable');
} else if (ricardo > 9 && ricardo <= 10) {
    console.log('La nota de Ricardo es: Sobresaliente');
} else {
    console.log('La nota de Ricardo es: Nota no válida');
}

// Clasificación de Luisa
if (luisa >= 0 && luisa <= 3) {
    console.log('La nota de Luisa es: Muy deficiente');
} else if (luisa > 3 && luisa < 5) {
    console.log('La nota de Luisa es: Insuficiente');
} else if (luisa >= 5 && luisa <= 6) {
    console.log('La nota de Luisa es: Suficiente');
} else if (luisa > 6 && luisa < 7) {
    console.log('La nota de Luisa es: Bien');
} else if (luisa >= 7 && luisa <= 9) {
    console.log('La nota de Luisa es: Notable');
} else if (luisa > 9 && luisa <= 10) {
    console.log('La nota de Luisa es: Sobresaliente');
} else {
    console.log('La nota de Luisa es: Nota no válida');
}

// Clasificación de Andrés
if (andres >= 0 && andres <= 3) {
    console.log('La nota de Andrés es: Muy deficiente');
} else if (andres > 3 && andres < 5) {
    console.log('La nota de Andrés es: Insuficiente');
} else if (andres >= 5 && andres <= 6) {
    console.log('La nota de Andrés es: Suficiente');
} else if (andres > 6 && andres < 7) {
    console.log('La nota de Andrés es: Bien');
} else if (andres >= 7 && andres <= 9) {
    console.log('La nota de Andrés es: Notable');
} else if (andres > 9 && andres <= 10) {
    console.log('La nota de Andrés es: Sobresaliente');
} else {
    console.log('La nota de Andrés es: Nota no válida');
}
