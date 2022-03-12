//encontrando uma palavra
// g - encontrar todas as ocorrencias da palavra
// i - insensitive não diferencia letra miniscula de maiuscula
// () - usado para definir grupos de pesquisa ex: (palavraUm)(palavraDois)
// | - usado para buscar uma palavra OU outra, mesmo sentido logico que javascript

const { texto } = require('./base_texto');

const regExpOne = /Palavra/i;

console.log(regExpOne.test(texto));
console.log(regExpOne.exec(texto));

//match
console.log(texto.match(regExpOne));