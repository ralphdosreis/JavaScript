// const quadrado = {
//   lados: 4,
//   area: function (lado) {
//     return lado * lado;
//   },
//   perimetro: function (lado) {
//     return lado * 4;
//   },
// };

// console.log(quadrado.lados);
// console.log(quadrado.area(2));
// console.log(quadrado.perimetro(2));

const quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return lado * 4;
  },
};

console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

var carro = {};
console.log(typeof carro);

const menu = {
  height: 400,
  width: 300,
  background: '#000',
};

var width = menu.width; // Dot Notation Get
console.log(width);

let botao = {
  color: '#151214',
  text: 'Sans serif',
  background: '#fff',
};

menu.background = '#000'; // Not Notation Set
console.log(menu.background);

const height = 300;
const menu2 = {
  width: 500,
  height: 400,
  metadeHeight() {
    return this.height / 2; // o this faz referência ao proprio objeto
  },
};

console.log(menu2.metadeHeight()); // 200, sem o this seria 150;

// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
let dadosPessoais = {
  nome: 'Ralph',
  sobrenome: 'Dos Reis Torres',
  idade: 25,
};

console.log(dadosPessoais.idade);

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function () {
  return `Seu nome completo é ${this.nome} ${this.sobrenome}!`;
};

console.log(dadosPessoais.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
};

carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  late(seeMan) {
    if (seeMan === 'Sim') {
      return 'Auauauau!';
    }
  },
};

console.log(cachorro.late('Sim'));
