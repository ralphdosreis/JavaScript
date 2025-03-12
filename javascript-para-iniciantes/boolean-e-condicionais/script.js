var corDoCeu = 'Azul';

switch (corDoCeu) {
  case 'Vermelho':
    console.log('O ceu é vermelho!');
    break;
  case 'Amarelo':
    console.log('O céu é amarelo!');
    break;
  case 'Azul':
    console.log('O céu é azul!');
    break;
  default:
    console.log('Feche os olhos!');
}

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idade = 25;
var idadeParente = 35;

if (idade > idadeParente) {
  console.log('É maior');
} else if (idade === idadeParente) {
  console.log('É igual');
} else {
  console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - ' ' && 5 - 2; // 3
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(nome);
console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta,
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil === china) {
  console.log('Os dois países tem a mesma quantidade de habitantes');
} else if (brasil > china) {
  console.log('O Brasil possuí mais habitantes que a China');
} else {
  console.log('A China possuí mais habitantes que o Brasil');
}

// O que irá aparecer no console? Falso
if ('Gato' === 'gato' && 5 > 2) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console? Cão
if ('Gato' === 'gato' || 5 > 2) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
