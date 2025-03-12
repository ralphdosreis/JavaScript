// Retorne o url da página atual utilizando o objeto window
const href = window.location.href;
console.log(href);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const primeiroClassAtivo = document.querySelector('.ativo');
console.log(primeiroClassAtivo);

// Retorne a linguagem do navegador
const language = window.navigator.language;
console.log(language);

// Retorne a largura da janela
const larguraJanela = window.innerWidth;
console.log(larguraJanela);
