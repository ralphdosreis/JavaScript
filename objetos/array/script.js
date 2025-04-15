// let li = document.querySelectorAll('li'); // NodeList
// li = Array.from(li); // Transforma em array

// const carros = {
//   0: 'Fiat',
//   1: 'Ferrari',
//   2: 'Nissan',
//   length: 4,
// };

// const carrosArray = Array.from(carros); // Array com 4 elementos, se não tiver todos os valores é colocado undefined
// console.log(Array.isArray(carrosArray)); // Verifica se é array

// const lista1 = ['Guitara', 'Baixo', 'Violão', 10, 20, 5, 7, 15];
// lista1.sort(); // Ordena com base no sistema unicode(alfabetica e digito a digito)
// console.log(lista1);
// const carros2 = ['Ferrari', 'Gol', 'Polo'];
// console.log(carros2.unshift('Parati', 'Palio')); // Adiciona os elementos ao início da array e retorna seu length
// console.log(carros2.push('HB20', 'Onix')); // Adiciona ao final do array e retorna seu length

// const primeiroCarro = carros2.shift(); // Remove o primeiro elemento e retorna seu length
// console.log(primeiroCarro);
// const ultimoCarro = carros2.pop(); // Remove o último elemento e retorna seu length
// console.log(ultimoCarro);

// const carros3 = ['Ford', 'Fiat', 'VW', 'Honda'];
// carros3.reverse(); // Inverte a ordem dos elementos da Array
// carros3.splice(1, 0, 'Kia', 'Mustang'); // Adiciona a partir do index informado no primeiro parâmetro e retira a quantidade de elementos do segundo parâmetro a partir do index informado no primeiro parâmetro
// console.log(carros3);
// const itens = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
// console.log(itens.copyWithin(2, 0, 3)); // A partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia.
// itens.fill('Banana', 1, 3); // Irá reescrever o array com base no parâmetro passado, a partir do index do segundo parâmetro até o index do terceiro parâmetro
// console.log(itens);

// const transportes1 = ['Barco', 'Aviao'];
// const transportes2 = ['Carro', 'Moto'];

// const transportes = transportes1.concat(transportes2); // Não modifica os arrays originais. Cancatena os arrays

// const linguagens = ['html', 'css', 'js', 'python', 'java', 'js'];
// console.log(linguagens.includes('css')); // Verifica se o array possui o argumento passado e retorna true ou false
// console.log(linguagens.indexOf('react')); // Retorna o index do elemento do array passado como parâmetro. Se o elemento não existir no array, retorna -1
// console.log(linguagens.lastIndexOf('js')); // Retorna o ultimo index do elemento do array passado no parâmetro
// console.log(linguagens.join('; ')); // retorna uma string com todos os elementos do array. Se for passo algum parâmetro, ele será usado para separar os elementos da string

// let htmlString = '<h2>Título Principal</h2>';
// htmlString = htmlString.split('h2');
// // ['<', '>Título Principal</', '>']
// htmlString = htmlString.join('h1');
// // <h1>Título Principal</h1>

// console.log(linguagens.slice(1, 4)); // Retorna os itens do array começando do primeiro parâmetro e indo até o segundo parâmetro

// const cloneLinguagens = linguagens.slice();
// console.log(cloneLinguagens);

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const primeiraComida = comidas.shift();
console.log(primeiraComida);

// Remova o último valor de comidas e coloque em uma variável
const ultimaComida = comidas.pop();
console.log(ultimaComida);

// Adicione 'Arroz' ao final da array
comidas.push('Arroz');
console.log(comidas);

// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata');
console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort();
console.log(estudantes);

// Inverta a ordem dos estudantes
estudantes.reverse();
console.log(estudantes);

// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'));

// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'));

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section').join('ul').split('div').join('li');
console.log(html);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const cloneCarros = carros.slice();
carros.pop();
console.log(carros);
console.log(cloneCarros);
