// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector('img');

console.log(primeiraImg.offsetTop);

// Retorne a soma da largura de todas as imagens
function somaImgs() {
  const imgs = document.querySelectorAll('img');

  let somaTotalWidthImgs = 0;
  imgs.forEach((img) => {
    somaTotalWidthImgs += img.offsetWidth;
  });

  console.log(somaTotalWidthImgs);
}

window.onload = function () {
  somaImgs();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link) => {
  let dimensoesLink = link.getBoundingClientRect();
  if (dimensoesLink.width >= 48 && dimensoesLink.height >= 48) {
    console.log(link, 'Dentro das medidas recomendadas!');
  } else {
    console.log(link, 'Tamanho das medidas menores do que o recomendado!');
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const small = window.matchMedia('(max-width: 720px)');

if (small.matches) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}
