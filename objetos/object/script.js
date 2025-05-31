// // Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu prototype.

// const carro ={
//   marca: 'Ford',
//   ano: 2018,
// }

// const pessoa = new Object({
//   nome: 'Ralph',
//   idade: 26,
// })

// const carro2 = {
//   rodas: 4,
//   init(marca) {
//     this.marca = marca;
//     return this;
//   },
//   acelerar() {
//     return `${this.marca} acelerou as ${this.rodas} rodas`;
//   },
//   buzinar() {
//     return `${this.marca} abuzinou!`;
//   }
// }

// const honda = Object.create(carro2); // Cria um novo objeto com as propriedades e métodos do objeto passado
// console.log(honda.init('Honda').acelerar());

// const funcaoAutomovel = {
//   acelerar() {
//     return `${this.marca} acelerou!`;
//   },
//   buzinar() {
//     return `${this.marca} de ${this.rodas} rodas buzinou!`;
//   }
// }

// const moto = {
//   marca: 'Honda',
//   rodas: 2,
// }

// const carro3 = {
//   marca: 'BMW',
//   rodas: 4,
// }

// const funcaoVoar = {
//   voar() {
//     return `${this.marca} voou!`;
//   }
// }

// Object.assign(moto, funcaoAutomovel); // Adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo.
// console.log(moto.acelerar());
// Object.assign(carro3, funcaoAutomovel);
// console.log(carro3.acelerar());
// Object.assign(carro3, funcaoVoar);
// console.log(carro3.voar());


// const moto2 = {}
// Object.defineProperties(moto, { // Existe também o Object.defineProperty, para uma propriedade única
//   rodas: {
//     value: 4,
//     configurable: false, // Impede deletar e mudança de valor
//     enumerable: true, // Torna enumerável
//   },
//   capacete: {
//     value: true,
//     configurable: true,
//     writable: false, // impede a mudança de valor
//   },
// })

// console.log(moto.rodas);
// delete moto.capacete;
// console.log(moto);


// const moto3 = {}
// Object.defineProperties(moto3, { // É possível definirmos diferentes comportamentos para get e set de uma propriedade
//   velocidade: {
//     get() {
//       return this._velocidade;
//     },
//     set(valor) {
//       this._velocidade = 'Velocidade ' + valor;
//     }
//   },
// })

// moto3.velocidade = 200;
// console.log(moto3.velocidade)

// console.log(Object.getOwnPropertyDescriptors(Array)); // Lista todos os métodos e propriedades de um objeto, com as suas devidas comfigurações

// Object.keys(moto3); // Retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto.
// console.log(Object.values(carro3)); // Retorna um array com os valores do objeto
// console.log(Object.entries(carro3)); // Retorna um array com arrays contendo a chave e o valor

// console.log(Object.getPrototypeOf(moto3)); // Retorna o protótipo do objeto
// console.log(Object.is(moto3, carro3)); // Verifica se os objetos são iguais e retorna true ou false

// Object.freeze(carro3); // Impede a mudança das propriedades
// Object.seal(carro3); // Impede a adição de novas propriedades e impede que as atuais sejam deletadas
// Object.preventExtensions(carro3); // Previne a adição de novas propriedades

// console.log(moto3.constructor); // Retorna a função construtora do objeto
// const nome = 'Dirceu';
// console.log(nome.constructor);

// console.log(moto3.hasOwnProperty('map')); // Verifica se possui a propriedade
// console.log(window.propertyIsEnumerable('innerHeight')); // Verifica se a propriedade é enumerável

// console.log(Object.prototype.isPrototypeOf(moto3)); // Verifica se é o prototipo do valor passado

// console.log(Object.prototype.toString.call(nome)); // Retorna o tipo do objeto




// Crie uma função que verifique
// corretamente o tipo de dado
function verificaObjeto(objeto) {
  console.log(Object.prototype.toString.call(objeto));
}

verificaObjeto(8);

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {}
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    configurable: false,
  },
})
quadrado.lados = 5;
console.log(quadrado.lados)


// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}
Object.seal(configuracao);
delete configuracao.width;
console.log(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyDescriptors(String));
console.log(Object.getOwnPropertyDescriptors(Array));
