// function Carro() {
//   // Função construtora de objetos. Começa por conveção com letra maiúscula
//   this.marca = 'Marca';
//   this.preco = 0;
// }

// const honda = new Carro(); // Novo objeto com as mesmas caracteristicas de Carro
// honda.marca = 'Honda';
// honda.preco = '20000';

// const fiat = new Carro();
// fiat.marca = 'Fiat';
// fiat.preco = '50000';

// console.log(honda.marca);
// console.log(fiat.marca);

// function Carro(marca, precoInicial) {
//   this.marca = marca; // this faz referência ao proprio objeto construido com a Constructor Function
//   const taxa = 1.2;
//   const precoFinal = precoInicial * taxa;
//   this.preco = precoFinal;
//   this.portas = 4;
//   console.log(this);
// }

// const honda = new Carro('Honda', 20000);

// const Dom = {
//   // Objeto Dom
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativo() {
//     this.element().classList.add('ativo');
//   },
// };

// Dom.ativo(); // Adiciona a class ativo ao primeiro li do Dom
// Dom.seletor = 'ul'; // Muda o seletor do Dom
// Dom.ativo(); // Adiciona a class ativo ao primeiro ul do Dom

// function Dom(seletor) {
//   // this.seletor = seletor; // Não era necessário passar this.seletor = seletor, pois na proxima linha seletor está sendo buscado no Dom
//   const element = document.querySelector(seletor);
//   this.ativo = (classe) => {
//     element.classList.add(classe);
//   };
// }

// const lista = new Dom('li');
// lista.ativo('ativo');

// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = () => {
    console.log(this.nome + ' andou');
  };
  this.dados = () => {
    console.log(`Seu nome é ${this.nome} e sua idade é ${this.idade}!`);
  };
}

const aluno = new Pessoa('Ralph');
aluno.andar();

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa('Joao', 20);
joao.dados();
const maria = new Pessoa('Maria', 25);
maria.dados();
const bruno = new Pessoa('Bruno', 15);
bruno.dados();

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(element) {
  const elementsList = document.querySelectorAll(element);
  this.elements = elementsList;
  this.ativa = function (classe) {
    elementsList.forEach((item) => {
      item.classList.add(classe);
    });
  };
  this.remove = function (classe) {
    elementsList.forEach((item) => {
      item.classList.remove(classe);
    });
  };
}

const li = new Dom('li');
li.ativa('ativo');
li.remove('ativo');
