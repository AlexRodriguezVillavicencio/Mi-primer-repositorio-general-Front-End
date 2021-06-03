"use strict";

var lista = document.getElementById('lista');
var arrayItem = ['item 1', 'item 2', 'item 3'];
var fragment = new DocumentFragment();
arrayItem.forEach(function (item) {
  var li = document.createElement('li');
  li.innerHTML = item;
  fragment.appendChild(li);
});
lista.appendChild(fragment); // De esta manera disminuimos el reflow