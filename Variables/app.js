var nombre = 'Jesica';
console.log(nombre);
console.log(typeof(nombre));

var edad = 28;
console.log(edad);
console.log(typeof(edad));

var salario = 1800000.10;
console.log(salario);
console.log(typeof(salario));

var profesional = true;
console.log(typeof(profesional));

var profesion;
console.log(profesion);

var cargo = null;
console.log(cargo);
console.log(typeof(cargo));

edad = 'Veintiocho';
console.log(edad);
console.log(typeof(edad));

// Operadores matemáticos

// Variables que determinan la edad de cada usuario
var edadAlberto, edadRicardo, edadPaola, edadXiomara;

// Variables que contienen los años de nacimiento de cada usuario
var totalEdades, fechaAlberto, fechaRicardo, fechaPaola, fechaXiomara, fechaPropia;

//almacena las diferencias de edades entre los usuarios
var diferenciaEdad;

//Almacena el año actual para calcular años de nacimiento
var presente;

//Almacena la edad del usuario que está desarrollando la actividad
var edadPropia;

edadAlberto = 50;
edadRicardo = 45;
edadPaola = 37;
edadXiomara = 40;
presente = 2024;
edadPropia = 28;


//1. Hallar la diferencia de edad entre Alberto y Xiomara
diferenciaEdad = edadAlberto - edadXiomara;
console.log('La diferencia de edad entre Alberto y Xiomara es: ');
console.log(diferenciaEdad);

// 2. Hallar la diferencia de edad entre Ricardo y Paola
diferenciaEdad = edadRicardo - edadPaola;
console.log('La diferencia de edad entre Ricardo y Paola es: ');
console.log(diferenciaEdad);

//3. Hallar los años de nacimiento de cada uno de ellos


fechaAlberto = presente - edadAlberto;
console.log('El año de nacimiento de Alberto es: ');
console.log(fechaAlberto);

fechaRicardo = presente - edadRicardo;
console.log('El año de nacimiento de Ricardo es: ');
console.log(fechaRicardo);

fechaPaola = presente - edadPaola;
console.log('El año de nacimiento de Paola es: ');
console.log(fechaPaola);

fechaXiomara = presente - edadXiomara;
console.log('El año de nacimiento de Xiomara es: ');
console.log(fechaXiomara);

//4. Hallar la diferencia de edad entre Paola y yo

diferenciaEdad = edadPaola - edadPropia;
console.log('La diferencia de edad entre Paola y yo es: ');
console.log(diferenciaEdad);

//5. Hallar mi fecha de nacimiento
fechaPropia = presente - edadPropia;
console.log('Mi año de nacimiento es: ');
console.log(fechaPropia);

//6. Totalizar todas las edades
totalEdades = edadAlberto + edadPaola + edadPropia + edadRicardo + edadXiomara;
console.log('La suma de todas las edades es: ');
console.log(totalEdades);


