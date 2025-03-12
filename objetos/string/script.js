// // String é a construtora de strings, toda string possui as propriedades e métodos do prototype de String

// const ano = new String(2018);
// console.log(ano.constructor.name); // String

// const comidaFavorita = 'Jantinha com feijão tropeiro';
// console.log(comidaFavorita.length); // 28 (Conta os espaços)
// console.log(comidaFavorita[comidaFavorita.length - 1]); // o
// console.log(comidaFavorita.charAt(0)); // J

// const lugar = ' da Lucimar';

// const fraseCompleta = comidaFavorita.concat(lugar, '!!!');
// console.log(fraseCompleta);

// const fruta = 'Melancia';
// const listaFrutas = 'Banana, Uva, Melão e Melancia';

// console.log(listaFrutas.includes(fruta)); // true

// console.log(fruta.startsWith('me')); // false
// console.log(fruta.startsWith('Me')); // true
// console.log(fruta.endsWith('cia')); // true

// const transacao = 'Depósito de cliente';

// const valorCortado = transacao.slice(0, 3); // Corta com base na posicao inicial e final. A String original continua do mesmo jeito
// console.log(valorCortado);
// const ultimaPalavra = transacao.slice(-7);
// console.log(ultimaPalavra);

// const comSubtring = transacao.substring(0, 3); // Funciona como o slie, porém não funciona com valor negativos
// console.log(comSubtring); // Dep

// console.log(transacao.indexOf('t')); // Retorna o primeiro index do valor passado
// console.log(transacao.lastIndexOf('t')); // Retorna o último index correspondente ao valor passado

// const listaPrecos = ['R$55', 'R$22', 'R$35'];
// listaPrecos.forEach((preco) => {
//   console.log(preco.padStart(10, '.')); // Aumenta o tamanho da string conforme o valor passado, colocando o que foi passado no segundo parâmetro (Se não colocar nada é colocado espaço)
//   console.log(preco.padEnd(5, '='));
// });

// let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
// listaItens = listaItens.replace(/[ ]+/g, ', '); // Troca o que foi passado(Pode se usar regular expression) pelo valor do segundo parâmetro
// console.log(listaItens);
// const arrayListaItens = listaItens.split(', '); // Divide a String de acordo com o que foi passado como parâmetro e retorna uma array
// console.log(arrayListaItens);

// const valor = ' R$ 23.00 ';
// console.log(valor.trim()); // Tira os espaços do inicio e fim da String
// console.log(valor.trimEnd()); // Tira os espaços do fim
// console.log(valor.trimStart()); // Tira os espaços do início

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let totalRecebimentos = 0,
  totalTaxas = 0;

transacoes.forEach((transacao) => {
  if (transacao.descricao.startsWith('Taxa')) {
    totalTaxas += +transacao.valor.replace('R$ ', '');
  }
  if (transacao.descricao.startsWith('Recebimento')) {
    totalRecebimentos += +transacao.valor.replace('R$ ', '');
  }
});
console.log(totalTaxas);
console.log(totalRecebimentos);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';');
console.log(arrayTransportes);

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.split('span').join('a');
console.log(html);

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.slice(-1));

// Retorne o total de taxas
const transacoes1 = [
  'Taxa do Banco',
  '   TAXA DO PÃO',
  '  taxa do mercado',
  'depósito Bancário',
  'TARIFA especial',
];

let totalTaxas2 = 0;
transacoes1.forEach((transacao) => {
  totalTaxas2 += transacao.toLocaleLowerCase().trim().startsWith('taxa');
});

console.log(totalTaxas2);

console.log('teste git');
