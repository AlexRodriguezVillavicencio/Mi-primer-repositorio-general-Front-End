// vamos a crear esto con js
// <li class="list">
//     <b>Nombre</b>
//     <span class="text-danger">descripción...</span>
// </li>

const lista = document.getElementById('lista')

const arrayLista = ['item 1','item 2','item 3']


let fragment = ''  // es equivalente al create elemento para el reflow
arrayLista.forEach(elemento => {
    fragment += `
    <li class="list">
    <b>Nombre</b>
    <span class="text-danger">${elemento}</span>
    </li>
    `
})
lista.innerHTML = fragment
