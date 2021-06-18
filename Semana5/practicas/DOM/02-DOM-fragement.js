// vamos a crear esto con js
// <li class="list">
//     <b>Nombre</b>
//     <span class="text-danger">descripción...</span>
// </li>
const lista = document.getElementById('lista');

const arrayLista = ['item 1', 'item 2','item 3'];

const fragment = document.createDocumentFragment()//para el reflow
arrayLista.forEach(item => {
    const li = document.createElement ('li'); //creamos el li
    li.classList.add('list'); //tsmbien creamos su clase
    const b = document.createElement('b');
    b.textContent = 'Nombre: ';
    li.appendChild(b); //mentemos la etiqueta b en li
    const span = document.createElement('sapan');
    span.classList.add('text-danger');
    span.textContent = item; //este es el texto dinamico
    li.appendChild(span);
    //ahora agregamos la estructura a frgament, el li ya tiene incoporad el b y span
    fragment.appendChild(li);
});
lista.appendChild(fragment); //ahora metemos todo a la id="lista" de la ul
