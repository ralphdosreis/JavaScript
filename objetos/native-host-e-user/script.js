// Liste 5 objetos nativos // Objetos nativos são aqueles definidos na especificação da linguagem e são implementados independente do host.
// Para verificar vá no terminal e abra o node com comando node
// Object;
// String;
// Array;
// Function;
// Number;

// Liste 5 objetos do browser
// Para verificar vá no Browser e digite window que é o construtor pai
// Window;
// HTMLColletion;
// navigator;
// chrome;
// document;

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if (typeof window.webkitRequestFileSystem !== 'undefined') {
  console.log('Existe o primeiro!');
}

if (typeof window.webkitResolveLocalFileSystemURL !== 'undefined') {
  console.log('Existe o segundo!');
}