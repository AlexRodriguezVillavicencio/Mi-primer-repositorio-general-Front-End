"use strict";

/* let objpersona = {
    nombre: "alex",
    apellido: "rodriguez",
    mostrarDatos: function () {
        console.log(`${objpersona.nombre} ${this.apellido}`);
    }
};
//el operador this sirve para no tener que nombrar el objeto: persona
objpersona.mostrarDatos();


//como se crean clases de forma tradicional

function persona (){
    this.nombre = "alex",
    this.edad = 23,
    this.apellido = `rodriguez`,
    //para usar el operador this no se debe usar funciones de flecha
    this.imprimirInfo = function () {
        console.log(`${this.nombre} ${this.apellido}`);
    };
}
let objpersona1 = new persona();
objpersona1.imprimirInfo();
 */
//nueva forma de crear
//las clases son estructuras que permiten crear objetos
//con las propiedades y metodos que tienen sus clases padres
var users = [{
  id: 1,
  email: 'george.bluth@reqres.in',
  first_name: 'George',
  last_name: 'Bluth',
  avatar: 'https://reqres.in/img/faces/1-image.jpg'
}, {
  id: 2,
  email: 'janet.weaver@reqres.in',
  first_name: 'Janet',
  last_name: 'Weaver',
  avatar: 'https://reqres.in/img/faces/2-image.jpg'
}, {
  id: 3,
  email: 'emma.wong@reqres.in',
  first_name: 'Emma',
  last_name: 'Wong',
  avatar: 'https://reqres.in/img/faces/3-image.jpg'
}, {
  id: 4,
  email: 'eve.holt@reqres.in',
  first_name: 'Eve',
  last_name: 'Holt',
  avatar: 'https://reqres.in/img/faces/4-image.jpg'
}, {
  id: 5,
  email: 'charles.morris@reqres.in',
  first_name: 'Charles',
  last_name: 'Morris',
  avatar: 'https://reqres.in/img/faces/5-image.jpg'
}, {
  id: 6,
  email: 'tracey.ramos@reqres.in',
  first_name: 'Tracey',
  last_name: 'Ramos',
  avatar: 'https://reqres.in/img/faces/6-image.jpg'
}];