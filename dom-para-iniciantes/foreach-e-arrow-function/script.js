const imgs = document.querySelectorAll('img');

imgs.forEach((valorAtual, index, array) => {
  console.log(valorAtual);
  console.log(index);
  console.log(array);
});

// Mostre no console cada parágrafo do site
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach((paragrafo) => {
  console.log(paragrafo);
});

// Mostre o texto dos parágrafos no console
paragrafos.forEach((paragrafo) => {
  console.log(paragrafo.innerText);
});

// Como corrigir os erros abaixo:
const imgs2 = document.querySelectorAll('img');

imgs2.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs2.forEach(() => {  
  console.log(i++);
});

imgs2.forEach(() => i++);
