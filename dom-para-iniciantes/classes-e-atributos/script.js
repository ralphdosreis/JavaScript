const menu = document.querySelector('.menu');

console.log(menu.className); // Retorna as classes do objeto selecionado
menu.classList.add('ativo'); // Adiciona a classe passada como parâmetro
menu.classList.remove('ativo'); // Remove a classe passada como parâmetro
menu.classList.toggle('ativo'); // Adiciona ou remove se não existir a classe passada como parâmetro
menu.classList.contains('ativo'); // Retorna true ou false
menu.classList.replace('ativo', 'inativo'); // Se o elemento tiver o primeiro parâmetro como classe ele é trocado pelo segundo

const animais = document.querySelector('.animais');

console.log(animais.attributes); // Retorna todos os atributos do elemento
animais.attributes[0]; // Retorna o primeiro atributo

const img = document.querySelector('img');

img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu ul li');

itensMenu.forEach((item) => {
  item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
  item.classList.remove('ativo');
});
itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imgs2 = document.querySelectorAll('img');
imgs2.forEach((img) => {
  console.log(img.hasAttribute('alt'));
});

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="https"]');
linkExterno.setAttribute('href', '#');
