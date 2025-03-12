const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section'); // HTML Collection não é estática
const gridSectionNode = document.querySelectorAll('.grid-section'); // NodeList é estática

titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens

// Retorne no console todas as imagens do site
const todasImgs = document.querySelectorAll('img');
console.log(todasImgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const hrefImagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(hrefImagem);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeroH2 = document.querySelector('.animais-descricao h2');
console.log(primeroH2);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
const ultimoP = paragrafos[paragrafos.length - 1];
console.log(ultimoP);
