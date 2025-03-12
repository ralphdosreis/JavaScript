// const menu = document.querySelector('.menu');

// console.log(menu.innerHTML); // HTML interno
// console.log(menu.innerText); // Texto do elemento
// console.log(menu.outerHTML); // Todo HTML do elemento

// menu.innerHTML = '<p>Texto</p>'; // A tag é renderizada
// menu.innerText = '<p>Texto</p>'; // Vai toda a tag como texto para o elemento

// const lista = document.querySelector('.animais-lista');

// console.log(lista.parentElement); // pai
// console.log(lista.parentElement.parentElement); // pai do pai
// console.log(lista.previousElementSibling); // Elemento anterior/acima
// console.log(lista.nextElementSibling); // Proximo elemento/abaixo

// console.log(lista.children); // HTMLCollection dos filhos do elemento
// console.log(--lista.children.length); // Ultimo filho

// console.log(lista.previousSibling); // node acima
// console.log(lista.firstChild); // primeiro node
// console.log(lista.childNodes); // todos os node child

// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');

// // contato.appendChild(lista); // move lista para o final de contato
// // contato.insertBefore(lista, titulo); // insere a lista antes de titulo
// // contato.removeChild(titulo); // remove titulo de contato
// // contato.replaceChild(lista, titulo); // substitui titulo por lista

// const animais = document.querySelector('.animais');

// const novoH1 = document.createElement('h1'); // Cria uma elemento com base no que foi passado
// novoH1.innerText = 'Novo Titulo';
// novoH1.classList.add('titulo');

// animais.appendChild(novoH1);

// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const copiaMenu = menu.cloneNode(true); // Inclui os filhos
copy.appendChild(copiaMenu);

// Selecione o primeiro DT da dl de Faq
const faq1 = document.querySelector('.faq');
const primeiroDt = faq1.querySelector('dt');
console.log(primeiroDt);

// Selecione o DD referente ao primeiro DT
const primeiroDD = primeiroDt.nextElementSibling;
console.log(primeiroDD);

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;
