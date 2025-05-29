// // Toda função é criada com o construtor function e por isso herda as suas propriedades e métodos

// function somar(n1, n2) {
//   return n1 + n2;
// }

// console.log(somar.length); // Retorna a quantidade de parâmetros
// console.log(somar.name); // Retorna o nome da função

// const carro = {
//   marca: 'Ford',
//   ano: 2018
// }

// function descricaoCarro() {
//   console.log(this.marca + ' ' + this.ano);
// }

// console.log(descricaoCarro()) // undefined undefined
// console.log(descricaoCarro.call()); // undefined undefined
// console.log(descricaoCarro.call(carro)); // Ford 2018 // Executa a função sendo possivel passar uma nova referência de this


// const carros = ['Ford', 'Fiat', 'VW'];

// const frutas = ['Banana', 'Pêra', 'Uva', 'Melancia'];

// carros.forEach.call(frutas, (item) => {
//   console.log(item); // Log por cada fruta
// })

// function Dom(seletor) {
//   this.element=document.querySelector(seletor);
// };


// Dom.prototype.ativo = function(classe) {
//   this.element.classList.add(classe);
// };

// const lista = new Dom('ul');
// lista.ativo('ativar');
// console.log(lista);

// const novoSeletor = {
//   element: document.querySelector('li')
// }

// Dom.prototype.ativo.call(novoSeletor, 'ativo');

// Array.prototype.mostreThis = function() {
//   console.log(this);  // ['Uva', 'Maçã', 'Banana']
// }

// const frutas2 = ['Uva', 'Maçã', 'Pêra'];
// frutas2.mostreThis();

// console.log(Array.prototype.pop.call(frutas2)); // Remove Pêra
// console.log(frutas2.pop()); // Mesma coisa que a função acima



// // HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array. Por isso é possível utiliza-los mesmo na substituição do this em call
// const li = document.querySelectorAll('li');

// const filtro = Array.prototype.filter.call(li, function(item) {
//   return item.classList.contains('ativo');
// });

// console.log(filtro);


// const numeros = [10,67,28,35,94, -1];
// console.log(Math.max.apply(null, numeros)); // aplly funciona como call, a única diferença é que passamos os argumentos em uma array
// console.log(Math.max.call(null, 20,10,40,52,-5,68)); // 68


// const filtrarLi = Array.prototype.filter.bind(li, function(item) { // Não irá executar a função, mas sim retornar a mesma com o novo contexto de this
//   return item.classList.contains('ativo');
// })

// console.log(filtrarLi())

// const carro1 = {
//   marca: 'Ford',
//   ano: 2018,
//   acelerar: function(aceleracao, tempo) {
//     return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
//   }
// }

// carro1.acelerar(100, 20);

// const honda = {
//   marca: 'Honda',
// };

// const acelerarHonda = carro1.acelerar.bind(honda);
// console.log(acelerarHonda(200,10));


// function imc(altura, peso) {
//   return peso / (altura * altura);
// }

// const imc180 = imc.bind(null, 1.80); // Podemos passar argumentos padrões e retorna-los em uma nova função

// console.log(imc(1.80, 70)); // 21.6
// console.log(imc180(70)); // 21.6


// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
  acumulador += item.innerText.length;
  return acumulador;
},0)

console.log(totalCaracteres);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento;
}

console.log(criarElemento('li', 'azul', 'Conteúdo'));


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');

console.log(h1Titulo('Teste de titulo'));
