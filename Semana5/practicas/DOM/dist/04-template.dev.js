"use strict";

// vamos a crear esto con js
// <li class="list">
//     <b>Nombre</b>
//     <span class="text-danger">descripción...</span>
// </li>
var lista = document.querySelector('#lista');
var arrayLista = ['item 1', 'item 2', 'item 3'];
var template = document.getElementById('template-li').content;
var fragment = document.createDocumentFragment();
arrayLista.forEach(function (item) {
  template.querySelector('.list span').textContent = item; //accedemos con query y luego a su contenido como si fuera en css

  var clone = template.cloneNode(true); //lo clonamos

  fragment.appendChild(clone); //lo agregamos al fragment
});
lista.appendChild(fragment); //una vez tenido el fragment y lo agregamos a nuestra lista