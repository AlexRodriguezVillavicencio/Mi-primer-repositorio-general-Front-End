const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
// const span = document.getElementById('span');

let contador =0;

btn1.addEventListener ('click', () => {
    console.log('capturado XD');
    contador++
    span.textContent= contador;
})
btn2.addEventListener ('click', () => {
    console.log('capturado XD');
    contador--
    span.textContent= contador;
})