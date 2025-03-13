// const preco = 2.99;
// console.log(preco.toString()); // Transforma em String

// console.log(preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})); // Transforma em moeda com base no tipo de moeda passada // R$ 2,99
// console.log(preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'})); // $2.99

// console.log(Math.abs(-5.55)); // Retorna o valor absoluto
// console.log(Math.max(5,3,20,54,67,1)); // 67
// console.log(Math.min(5,3,20,54,67,1)); // 1
// console.log(Math.random()); // Número aleatorio entre 0 e 1

// Retorne um número aleatório
// entre 1050 e 2000

const numero = Math.floor(Math.random() * (2000 - 1050 + 1) + 950);
console.log(numero);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const numerosArray = numeros.split(', ');
let maiorNumero = 0;
numerosArray.forEach((numero) => {
  numero = parseInt(numero);
  if (numero >= maiorNumero) {
    maiorNumero = numero;
  }
});

console.log(maiorNumero);

// ou
// const numeroMax = Math.max(...numerosArray); // Spread Pega cada número da array
// console.log(numeroMax);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
let listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

let soma = 0;

function limpaPreco(lista) {
  lista.forEach((preco) => {
    preco = +(+preco
      .toUpperCase()
      .replace('R$', '')
      .trim()
      .replace(',', '.')).toFixed(2);
    soma += preco;
  });
  console.log(
    soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
  );
}

limpaPreco(listaPrecos);
