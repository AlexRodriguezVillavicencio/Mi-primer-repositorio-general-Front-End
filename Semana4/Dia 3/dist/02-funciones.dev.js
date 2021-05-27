"use strict";

function areaCirculo(r) {
  function cuadrado(n) {
    return n * n;
  }

  var rpta = cuadrado(r) * 3.1415;
  return rpta;
}

var circulo12 = areaCirculo(12);
console.log("Area del circulo con r=12 : ".concat(circulo12));
/**
 * Función que busca un nombre dentro de un arreglo
 * de nombres y retorna la posición en la que se encuentra
 * el nombre buscado.
 * Si el nombre no existe retorna -1
 * @param {String} nombre 
 * @param {Array} nombres 
 */

function buscarNombre(nombre, nombres) {
  for (var i = 0; i < nombres.length; i++) {
    if (nombres[i] === nombre) {
      return i;
    }
  }

  return -1;
}

var names = ["jorge", "carlos", "diana", "roxana", "dora"];
var posicion = buscarNombre("roxana", names);

if (posicion >= 0) {
  console.log("Encontrado en la posici\xF3n ".concat(posicion));
} else {
  console.log("Ups! no se encontr\xF3 el nombre en la DB");
}