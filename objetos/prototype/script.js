// O objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor. Lembrando, prototype é uma propriedade de funções apenas.

// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
// }

// const ralph = new Pessoa('Ralph', 25);
// console.log(Pessoa.prototype);

// Pessoa.prototype.andar = function () {
//   return console.log(this.nome + ' andou!');
// };

// ralph.andar();

// Object.prototype;
// console.log(ralph.toString());
// console.log(ralph.isPrototypeOf());
// console.log(ralph.valueOf());

// const pais = 'Brasil';
// const cidade = new String('Rio');

// pais.charAt(0); // B
// cidade.charAt(0); // R

// console.log(Object.getOwnPropertyNames(Array)); // 7 metodos e propriedades
// console.log(Object.getOwnPropertyNames(Array.prototype)); // 40 metodos e propriedades

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + ' ' + this.sobrenome;
};

const pessoa = new Pessoa('Ralph', 'dos Reis', 25);
console.log(pessoa.nomeCompleto());

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLAllCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // li.constructor.name // HTMLLIElement
li.click; // li.click.constructor.name // Function
li.innerText; // li.innerText.constructor.name // String
li.value; // li.value.constructor.name // Nummber
li.hidden; // li.hidden.constructor.name // Boolean
li.offsetLeft; // li.offsetLeft.constructor.name // Number
// li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
