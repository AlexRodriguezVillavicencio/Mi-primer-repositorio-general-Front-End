"use strict";

// vamos a crear esto con js
// <li class="list">
//     <b>Nombre</b>
//     <span class="text-danger">descripción...</span>
// </li>
var lista = document.getElementById('lista');
var arrayLista = ['item 1', 'item 2', 'item 3'];
var fragment = ''; // es equivalente al create elemento para el reflow

arrayLista.forEach(function (elemento) {
  fragment += "\n    <li class=\"list\">\n    <b>Nombre</b>\n    <span class=\"text-danger\">".concat(elemento, "</span>\n    </li>\n    ");
});
lista.innerHTML = fragment;