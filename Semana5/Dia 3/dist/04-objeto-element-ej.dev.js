"use strict";

var imagenes = ['https://i.picsum.photos/id/564/200/200.jpg?hmac=uExb18W9rplmCwAJ9SS5NVsLaurpaCTCBuHZdhsW25I', 'https://i.picsum.photos/id/1052/200/200.jpg?hmac=C8TAQ7jOmsdTxY6LFqx0ft2jNVIX0GxUmo8kCnVHkIE', 'https://i.picsum.photos/id/596/200/200.jpg?hmac=TiMsstBNF6YKq9Gn7QGsihITEUcv_O8QuTXEVR3T6GA', 'https://i.picsum.photos/id/1047/200/200.jpg?hmac=kudT4eT6oVe4zhN1SEkQl9MN_AWC771kb2QAUgLjlmc', 'https://i.picsum.photos/id/399/200/200.jpg?hmac=LCWCFY16G50iBPpqU6-FCw79ovEqvznYsxoQNCIldV8', 'https://i.picsum.photos/id/134/200/200.jpg?hmac=a3L-JjVSGeG8w3SdNpzxdh8WSC0xHJXgeD6QryCK7pU'];
var btn1 = document.getElementById('btn1');
var imagen = document.getElementById('imagen');
var btn2 = document.getElementById('btn2');
var n = 0;

btn1.onclick = function (n) {};

btn2.onclick = function (move) {
  if (imagenes[n]) {
    console.log(imagenes[n]);
    ;
  }

  imagen.innerHTML = imagenes[2];
};