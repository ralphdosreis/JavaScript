// setTimeout(callback, tempo, arg1, arg2, ...)
// Método assíncrono que ativa o callback após tempo. Não existe garantia de que o código será executado exatamente após o tempo, pois o callback entra na fila e espera pela Call Stack estar vazia.

function espera(texto) {
  console.log(texto);
}

setTimeout(espera, 1000, 'Depois de 1s');

const button = document.querySelector('button');
button.addEventListener('click', handleClick);

// Com Arrow function como callback, o contexto de this passa a ser do local onde o setTimeOut foi iniciado
function handleClick(event) {
  setTimeout(() => {
    this.classList.add('ativo');
  }, 1000);
}


// let i=0;
// setInterval(() => { // Irá ativar o callback toda  vez que o tempo passar
//   console.log(i++);
// }, 1000);


// Podemos parar um intervalo com o clearInterval. Para isso precisamos atribuir o setInterval a uma variável

const contarAte10 = setInterval(callback, 1000);

let j = 0;
function callback() {
  console.log(j++);
  if (j> 10) {
    clearInterval(contarAte10);
  }
}


// Mude a cor da tela para azul e depois para vermelho a cada 2s.

function mudaCor() {
  window.document.body.classList.toggle('red');
}
setInterval(mudaCor, 2000)

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarContagem);
pausar.addEventListener('click', pausaContagem);
pausar.addEventListener('dblclick', resetaContagem);

let i = 0;
let timer;

function iniciarContagem() {
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 100)
}


function pausaContagem() {
  clearInterval(timer);
}

function resetaContagem() {
  tempo.innerText = 0;
  i=0;
}
