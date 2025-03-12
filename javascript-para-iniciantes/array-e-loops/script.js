// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
const anosCampeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

// for (i = 0; i < anosCampeao.length; i++) {
//   console.log(`O Brasil ganhou a copa de ${anosCampeao[i]}`);
// }

// anosCampeao.forEach((ano) => {
//   console.log(`O Brasil ganhou a copa de ${ano}`);
// });

let i = 0;
while (i < anosCampeao.length) {
  console.log(`O Brasil ganhou a copa de ${anosCampeao[i]}`);
  i++;
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
for (i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === 'Pera') {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
const ultimaFruta = frutas[frutas.length - 1];
console.group(ultimaFruta);
