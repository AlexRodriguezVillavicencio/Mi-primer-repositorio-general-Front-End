
let div1 = document.getElementById('div1');
let btn1 = document.getElementById('btn1');
let btn1Borrar = document.getElementById('btn1-borrar');
let btn1Toggle = document.getElementById('btn1-toggle');

//agregar el evento click al btn1
btn1.onclick = () => {
    div1.classList.add('circulo');
};

btn1Borrar.onclick = () => {
    div1.classList.remove('circulo');
};

btn1Toggle.onclick = () => {
    div1.classList.toggle('circulo');
};





let imagen = document.getElementById('imagen');
let btnImagen = document.getElementById('btnImagen');

btnImagen.onclick = () => {
	imagen.setAttribute('src', 'http://placehold.it/150X150');
};

// iomprimir el href de un link por ejemplo
// let linkGoogle = document.getElementById('linkGoogle');
// console.log(linkGoogle.getAttribute('href'));