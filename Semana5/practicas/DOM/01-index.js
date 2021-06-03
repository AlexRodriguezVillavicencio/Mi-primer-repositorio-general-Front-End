//este es mpas dinamico puedes selecionar 
// id: '#   '
//class: '. '
// etiquetas: ' '
/* console.log(document.querySelector('h2'));
console.log(document.querySelector('#h1'));
console.log(document.querySelector('.parrafo')); */

//sirve para seleccionar solo id
/* console.log(document.getElementById('h1')); */
/* recuerden que los id son unicos a diferencia de las clases, dos etiquetas no
pueden tener el mismo id */


//si quieras capturar todo elementos que se repiten o elementos
//que tiene las mismas clases entonces:
/* console.log(document.querySelectorAll('h1')); */




/* //formas de hacer una función, tradicional y flecha
function suma(a,b) {
    return a+b;
}
resultado = suma(3,4);
console.log(resultado);
const resta= c=> resultado -c;
resultado = resta(2);
console.log(resultado); */


// agregando una lista array al documento
// creamos una constante lista 
const lista = document.getElementById('lista');
// creamos un Array
const arrayElement = ['primero', 'segundo','tercero'];
// creamos la función
arrayElement.forEach(item => {
    //creamos un nuevo elemento
    const li = document.createElement('li');
    // agregamos con esto texto
    li.innerHTML = item;
    //agregando un documentp hijo 
    lista.appendChild(li);
    console.log(item);
});