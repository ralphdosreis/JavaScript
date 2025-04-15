// const carros = ['Ford', 'Fiat', 'Honda'];
// carros.forEach((item, index, array) => {
//   // Intera por cada elemento da array e possui os parametros item, index e array
//   console.log(item.toUpperCase());
// });

// const li = document.querySelectorAll('li');
// li.forEach((i) => i.classList.add('ativa'));

// // carros.forEach((item, index, array) => { // O terceiro parâmetro é uma referência direta da array, então por meio dela é possivel alterar a array original. É melhor utilizar o map para isso
// //   array[index] = 'Carro ' + item;
// // });

// // console.log(carros);

// const newCarros = carros.map((item) => {
//   // Retorna uma nova array com os valores de cada iteração
//   return 'Carro ' + item;
// });

// console.log(newCarros);

// const numeros = [2, 4, 6, 8, 10];
// const numerosX3 = numeros.map((n) => n * 3);
// console.log(numerosX3);

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15,
//   },
//   {
//     nome: 'HTML 2',
//     min: 10,
//   },
//   {
//     nome: 'CSS 1',
//     min: 20,
//   },
//   {
//     nome: 'JS 1',
//     min: 25,
//   },
// ];

// const tempoAulas = aulas.map((aulas) => aulas.min); // Faz a iteração por cada item do arrau aulas, e retorna uma nova array com os valores dos minutos de cada aulas dos objetos
// console.log(tempoAulas);

// const puxarNomes = (aula) => aula.nome;
// const nomesAulas = aulas.map(puxarNomes);
// console.log(nomesAulas);

// const totalMin = tempoAulas.reduce((acumulador, min) => acumulador + min, 100); // O acumulador é o retorno da iteração anterior. O segundo parâmetro é o valor atual da iteração. Se não definir valor inicial para o acumulador, ele irá pular a primeira iteração e começará a partir da segunda
// console.log(totalMin);

// const numeros2 = [10, 25, 60, 5, 35, 10];
// const maiorValor = numeros2.reduce((anterior, atual) => {
//   return anterior < atual ? atual : anterior;
// });

// console.log(maiorValor);

// const aulas2 = [
//   {
//     nome: 'HTML 1',
//     min: 15,
//   },
//   {
//     nome: 'HTML 2',
//     min: 10,
//   },
//   {
//     nome: 'CSS 1',
//     min: 20,
//   },
//   {
//     nome: 'JS 1',
//     min: 25,
//   },
// ];

// const listaAulas = aulas.reduce((acumulador, atual, index) => {
//   acumulador[index] = atual.nome;
//   return acumulador;
// }, {});

// console.log(listaAulas);

// const frutas = ['Banana', 'Pêra', 'Uva'];
// const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
// console.log(frutasRight);

// const temUva = frutas.some((fruta) => {
//   // Retorna true se pelo menos uma iteração ser
//   return fruta == 'Uva';
// });

// console.log(temUva);

// const cloneFrutas = frutas.slice();
// cloneFrutas.push('');

// const arrayCheia = cloneFrutas.every((fruta) => {
//   // Retorna false se pelo menos uma das iterações forem false
//   return fruta;
// });
// console.log(arrayCheia);

// const buscaBanana = frutas.findIndex((fruta) => {
//   // Retorna o index do elemento passado que exite no array
//   return fruta === 'Banana';
// });
// console.log(buscaBanana);

// const numeros3 = [10, 15, 46, 2, 88, 12];

// const maiorQue45 = numeros3.find((x) => x > 45);
// console.log(maiorQue45);

// cloneFrutas.push(0, 'Maça');

// const arrayVerdadeiro = cloneFrutas.filter((fruta) => {
//   // Retorna um array com os elementos que retornaram truthy em cada iteração.
//   return fruta;
// });
// console.log(arrayVerdadeiro);

// const aulas3 = [
//   {
//     nome: 'HTML 1',
//     min: 15,
//   },
//   {
//     nome: 'HTML 2',
//     min: 10,
//   },
//   {
//     nome: 'CSS 1',
//     min: 20,
//   },
//   {
//     nome: 'JS 1',
//     min: 25,
//   },
// ];

// const maioresQue15 = aulas3.filter((aula) => {
//   return aula.min > 15;
// });

// console.log(maioresQue15);

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);
const objetoCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aula = curso.querySelector('.aulas').innerText;
  const hora = curso.querySelector('.horas').innerText;
  return {
    titulo: titulo,
    descricao: descricao,
    aulas: aula,
    horas: hora,
  };
});
console.log(objetoCurso);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maioresQue100 = numeros.filter((numero) => {
  return numero > 100;
});
console.log(maioresQue100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];
const temBaixo = instrumentos.some((instrumento) => {
  return instrumento === 'Baixo';
});
console.log(temBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99',
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99',
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49',
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35',
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60',
  },
];

const valorTotal = compras.reduce((total, valorAtual) => {
  return (total += +valorAtual.preco.replace('R$ ', '').replace(',', '.'));
}, 0);

console.log(valorTotal);
