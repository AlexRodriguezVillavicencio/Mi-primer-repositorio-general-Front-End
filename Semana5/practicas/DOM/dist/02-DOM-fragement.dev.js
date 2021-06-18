"use strict";

// vamos a crear esto con js
// <li class="list">
//     <b>Nombre</b>
//     <span class="text-danger">descripción...</span>
// </li>
var lista = document.getElementById('lista');
var arrayLista = ['item 1', 'item 2', 'item 3'];
var fragment = document.createDocumentFragment(); //para el reflow

arrayLista.forEach(function (item) {
  var li = document.createElement('li'); //creamos el li

  li.classList.add('list'); //tsmbien creamos su clase

  var b = document.createElement('b');
  b.textContent = 'Nombre: ';
  li.appendChild(b); //mentemos la etiqueta b en li

  var span = document.createElement('sapan');
  span.classList.add('text-danger');
  span.textContent = item; //este es el texto dinamico

  li.appendChild(span); //ahora agregamos la estructura a frgament, el li ya tiene incoporad el b y span

  fragment.appendChild(li);
});
lista.appendChild(fragment); //ahora metemos todo a la id="lista" de la ul