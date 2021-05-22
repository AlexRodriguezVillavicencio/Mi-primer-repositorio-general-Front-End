console.log("hola mundo")

//variables
/* 
*1. Una variable se crea sólo una vez.
*/
//TIPO DE DATO cadena de texto (STRING)
let nombre="alex anderson";
let apellido="rodriguez villavicencio"

nombre="alexis"

console.log(nombre);

// TIPO DE DATO NUMERICO (number)
let edad= 23;
let sueldo= 950.20;
sueldo=980.00;
sueldo=sueldo+ 20;

//concatenar
console.log("sueldo: " + sueldo);

//TIPO DE DATO BOOLEAN (verdadero o falso)
let soltero=true;
let papeletas = false;

console.log("soltero?: " + soltero);

// TIPO DE DATO ARRAY
let meses = ["january","february", "march","april"];
console.log(meses);

//imprimir alguna posicion de los arreglos
console.log(meses[2]);

/* 
operaciones matematicas son similares como en el excel
+, -, *, /
% => (módulo) es una operación que retorna el residuo de una división entera
 */
let modulo = 55%6;
console.log("El residuo de la divión de 55/6 es: " + modulo);

//Operaciones simplificadas
let likes = 2;
//incrementar automaticamente en una unidad a la variable likes
likes++;
console.log(likes);
//incrementar automaticamente en una unidad a la variable likes
likes = likes + 1;
console.log(likes);
//incrementar automaticamente en una unidad a la variable likes
likes += 1;
console.log(likes);