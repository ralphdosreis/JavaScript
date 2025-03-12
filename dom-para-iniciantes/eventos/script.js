// const animaisLista = document.querySelector('.animais-lista');

// function executarCallback(event) {
//   console.log(event); // Tipo de evento ocorrido
//   const currentTarget = event.currentTarget; // Alvo em que o elemento está envolvido. Local do evento
//   const target = event.target; // Alvo exato do evento
//   const type = event.type; // Tipo do evento
//   const path = event.path; // Caminho do evento
//   console.log(currentTarget, target, type, path);
// }

// animaisLista.addEventListener('click', executarCallback);

// const linkExterno = document.querySelector('a[href^="https"]');

// function executaEvento(event) {
//   event.preventDefault(); // Previne o comportamento padrão
//   console.log(event.currentTarget.href);
// }

// linkExterno.addEventListener('click', executaEvento);

// const img = document.querySelector('img');

// function callBack(event) {
//   console.log(this); // Faz referência ao elemento do evento, como se fosse o currentTarget
//   console.log(this.getAttribute('src'));
// }

// img.addEventListener('click', callBack);

// function handleKeyboard(event) {
//   if (event.key === 'a') document.body.classList.toggle('azul');
//   else if (event.key === 'v') document.body.classList.toggle('vermelho');
// }
// window.addEventListener('keydown', handleKeyboard);

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleClick(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove('ativo');
  });
  event.currentTarget.classList.add('ativo');
}
linksInternos.forEach((link) => {
  link.addEventListener('click', handleClick);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const elementos = document.querySelectorAll('body *');

// function handleElement(event) {
//   console.log(event.target);
// }

elementos.forEach((elemento) => {
  elemento.addEventListener('click', handleElement);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function handleElement(event) {
  event.target.remove();
}

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleKey(event) {
  if (event.key === 't') {
    document.documentElement.classList.toggle('textoMaior');
  }
}
window.addEventListener('keydown', handleKey);
