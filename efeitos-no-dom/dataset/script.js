// Todo elemento HTML do DOM herda propriedades e métodos do construtor HTMLElement

const h1 = document.querySelector('h1');
console.log(Object.prototype.toString.call(h1)); // [object HTMLHeadingElement]
// HTMLHeadingElement > HTMLElement > Element > Node > EventTarget > Object

// dataset é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap. Dentro desse objeto existe uma coleção de chave/valor, com todos os atributos do elemento html que começarem com data-
const div = document.querySelector('div');
console.log(Object.prototype.toString.call(div)); // [object HTMLDivElement]
console.log(div.dataset); // DOMStringMap {cor: 'azul', width: '500'}
console.log(div.dataset.cor); // azul
div.dataset.height = 1000;
console.log(div.dataset);
delete div.dataset.height;
delete div.dataset.width;
console.log(div.dataset);


// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.




