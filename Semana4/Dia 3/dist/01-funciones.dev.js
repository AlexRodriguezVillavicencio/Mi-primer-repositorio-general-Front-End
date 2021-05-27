"use strict";

/* //funcion
function tablademultiplicar(){
    let n = 6;
    for (let i= 0; i<13; i++){
        console.log(`${n}x${i} = ${n*i}`);
    }
}

/* y llamamos la función creada de esta manera */

/* tablademultiplicar(); */

/* podemos llamarla las veces que quieras!♥ */
// ahora borramos el let y la n lo ponemos en la funcion

/* function tablademultiplicar(n){
    /* let n = 6; */

/*     for (let i= 0; i<13; i++){
        console.log(`${n}x${i} = ${n*i}`);
    }
} */

/* tablademultiplicar(2); */

/* de esa manera podemos automatizar más los parametros */
//ahora lo complicamos un poco mas
function tablademultiplicar(n, limite) {
  console.log("*******TABLA DEL ".concat(n));

  for (var i = 0; i < limite; i++) {
    console.log("".concat(n, "x").concat(i, " = ").concat(n * i));
  }
}

tablademultiplicar(5, 12);

function factorial(n) {
  var total = 1;

  for (var i = n; i > 0; i--) {
    total = total * i;
  }

  return total;
}

console.log("".concat(factorial(5)));