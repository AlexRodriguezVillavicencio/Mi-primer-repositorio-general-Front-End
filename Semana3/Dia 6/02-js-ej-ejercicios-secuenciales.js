/* 
*1. algoritmo para sumar 4 notas 
e imprimir el promedio de las 4
*/
let c1 =0, c2 = 0, c3 = 0, c4 = 0, promedio = 0, suma = 0;
//LEYENDO LOS NUMEROS QUE PONEN EL USUARIO
console.log(typeof c1);
/* anteponer el + al prompt convierte la variable en un numerp
 */
c1 = +prompt("ingrese la primera nota: ");
c2 = +prompt("ingrese la segunda nota: ");
c3 = +prompt("ingrese la tercera nota: ");
c4 = +prompt("ingrese la cuarta nota: ");
//como mostrar  el tipo de dato de una variable?
console.log(typeof c1);

suma = c1 + c2 + c3 + c4;
promedio = suma / 4;

/* 
el uso de los backticks () nos ayudan a concatenar
variables con strings en una sola linea sin el uso del operador (+) */
console.log("el promedio es: " + promedio);
console.log('el promedio es: ${promedio} ');


//hacer los ejercicios del 1 al 23 del libro de algoritmos, pagina 43
