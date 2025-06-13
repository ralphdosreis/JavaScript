import testeScroll from './modules/teste-scroll.js';

import { a1, a2 } from './modules/teste-dois-imports.js';

import * as config from './modules/configuração.js'


testeScroll();
a1();
a2();

console.log(config.str);
console.log(config.objeto);
console.log(config.ano)

// Dividir o código em diferentes arquivos com funções específicas [modulos] facilita a manutenção

// Pode-se importar mais de um valor. Quando for importar utilize as chaves para especificar cada valor. O nome importado deve ser igual ao exportado
