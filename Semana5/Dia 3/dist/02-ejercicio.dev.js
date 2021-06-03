"use strict";

var users = [{
  id: 1,
  email: 'george.bluth@gmail.in',
  first_name: 'George',
  last_name: 'Bluth',
  avatar: 'https://reqres.in/img/faces/1-image.jpg',
  age: 12
}, {
  id: 2,
  email: 'janet.weaver@reqres.in',
  first_name: 'Janet',
  last_name: 'Weaver',
  avatar: 'https://reqres.in/img/faces/2-image.jpg',
  age: 50
}, {
  id: 3,
  email: 'emma.wong@reqres.in',
  first_name: 'Emma',
  last_name: 'Wong',
  avatar: 'https://reqres.in/img/faces/3-image.jpg',
  age: 35
}, {
  id: 4,
  email: 'eve.holt@gmail.in',
  first_name: 'Eve',
  last_name: 'Holt',
  avatar: 'https://reqres.in/img/faces/4-image.jpg',
  age: 15
}, {
  id: 5,
  email: 'charles.morris@reqres.in',
  first_name: 'Charles',
  last_name: 'Morris',
  avatar: 'https://reqres.in/img/faces/5-image.jpg',
  age: 17
}, {
  id: 6,
  email: 'tracey.ramos@reqres.in',
  first_name: 'Tracey',
  last_name: 'Ramos',
  avatar: 'https://reqres.in/img/faces/6-image.jpg',
  age: 36
}];
var cuerpoTabla = document.getElementById("cuerpo-tabla");
var navegacion = document.getElementById('navegacion');

var fillTable = function fillTable() {
  var filas = '';
  users.forEach(function (usuario, i) {
    filas += "<tr>\n\t\t\t\t\t\t\t\t<td>".concat(i + 1, "</td>\n\t\t\t\t\t\t\t\t<td>").concat(usuario.id, "</td>\n\t\t\t\t\t\t\t\t<td>").concat(usuario.first_name, " ").concat(usuario.last_name, "</td>\n\t\t\t\t\t\t\t\t<td><img src=\"").concat(usuario.avatar, "\" alt=\"user photo\"/></td>\n\t\t\t\t\t\t\t\t<td>").concat(usuario.age, " <button>Eliminar</button> </td>\n\t\t\t\t\t\t\t</tr>");
    cuerpoTabla.innerHTML = filas;
  });
};

fillTable();

var fillLinks = function fillLinks() {
  var linksString = '';
  enlaces.forEach(function (enlace) {
    linksString += "<li><a href=\"".concat(enlace.path, "\">").concat(enlace.texto, "</a></li>");
  });
  navegacion.innerHTML = linksString;
};

fillLinks();