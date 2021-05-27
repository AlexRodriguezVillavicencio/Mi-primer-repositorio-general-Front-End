"use strict";

//FUNCIONES ANÓNIMAS Y CALLBACKS

/* function buscarporDNI(dni, parametro2){

    setTimeout(function(){
        parametro2();
    },3000)
}

buscarporDNI("755849999", function (){
            console.log("hola soy una función anonima");
})
 */

/*
 * Funcion que entrega los usuarios del sistema
 * @param {Function} callback 
 * Funcion que recibe un callback al cual envía
 * un arreglo con la lista de usuarios
 */
var getNombres = function getNombres(callback) {
  fetch("https://reqres.in/api/users").then(function (peticion) {
    return peticion.json();
  }).then(function (data) {
    var nombres = data.data.map(function (obj) {
      return obj.first_name;
    });
    callback(nombres);
  });
};

getNombres(function (usuarios) {
  console.log(usuarios);
});
console.log("linea final!!!!!");