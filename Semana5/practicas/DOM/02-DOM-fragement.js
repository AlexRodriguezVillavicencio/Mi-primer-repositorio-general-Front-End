const lista = document.getElementById('lista');

const arrayItem = ['item 1', 'item 2','item 3'];

const fragment = new DocumentFragment()

arrayItem.forEach(item => {
const li = document.createElement('li')
    li.innerHTML = item;

    fragment.appendChild(li)  
})
    lista.appendChild(fragment)

// De esta manera disminuimos el reflow