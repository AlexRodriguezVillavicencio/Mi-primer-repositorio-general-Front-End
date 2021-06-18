"use strict";

var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2'); // const span = document.getElementById('span');

var contador = 0;
btn1.addEventListener('click', function () {
  console.log('capturado XD');
  contador++;
  span.textContent = contador;
});
btn2.addEventListener('click', function () {
  console.log('capturado XD');
  contador--;
  span.textContent = contador;
});