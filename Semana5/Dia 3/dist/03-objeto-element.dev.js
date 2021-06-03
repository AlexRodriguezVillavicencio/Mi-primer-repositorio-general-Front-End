"use strict";

var div1 = document.getElementById('div1');
var btn1 = document.getElementById('btn1');
var btn1Borrar = document.getElementById('btn1-borrar');
var btn1Toggle = document.getElementById('btn1-toggle'); //agregar el evento click al btn1

btn1.onclick = function () {
  div1.classList.add('circulo');
};

btn1Borrar.onclick = function () {
  div1.classList.remove('circulo');
};

btn1Toggle.onclick = function () {
  div1.classList.toggle('circulo');
};

var imagen = document.getElementById('imagen');
var btnImagen = document.getElementById('btnImagen');

btnImagen.onclick = function () {
  imagen.setAttribute('src', 'http://placehold.it/150X150');
}; // iomprimir el href de un link por ejemplo
// let linkGoogle = document.getElementById('linkGoogle');
// console.log(linkGoogle.getAttribute('href'));