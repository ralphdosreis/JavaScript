function corFavorita(cor) {
  if (cor === 'Azul') {
    console.log('Sua cor favorita é azul');
  } else if (cor === 'Amarelo') {
    console.log('Sua cor favorita é amarelo');
  } else {
    console.log('Você não tem uma cor favorita');
  }
}

corFavorita(); // Você não tem uma cor favorita

addEventListener('click', function () {
  // Callback e funções anônimas
  console.log('Clicou!');
});

function imc(peso, altura) {
  // Funções sem return retorna undefined
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc(92, 1.91);
console.log(imc(92, 1.91));

// Crie uma função para verificar se um valor é Truthy
function verificaValor(valor) {
  if (valor) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaValor('Ralph'));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}

console.log(perimetroQuadrado(2));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome,
function nomeCompleto(nome, sobrenome) {
  return nome + ' ' + sobrenome;
}

console.log(nomeCompleto('Ralph', 'dos Reis Torres'));

// Crie uma função que verifica se um número é par
function isPar(numero) {
  if (numero % 2 === 0) {
    return `O número ${numero} é par!`;
  } else {
    return `O número ${numero} é ímpar!`;
  }
}

console.log(isPar(3));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
  return typeof dado;
}

console.log(tipoDeDado('Ralph'));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
const nome = 'Ralph';
addEventListener('scroll', function () {
  console.log(nome);
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
