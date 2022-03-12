const { texto2, arquivos, html, alfabeto } = require('./base_texto');

//quantificadores

// * (opcionais) 0 ou n
// + (obrigatorio) 1 ou n
// ? (opcionais) 0 ou 1
// \ caracteres de escape
// . significa qualquer caracter exceto uma quebra de linha

//console.log(texto2);

// encontra palavra com o primeiro a repetindo mas os demais nao 
const regExp1 = /Pa+lavra/gi

// encontra palavras com extensao jpg ou jpeg seguindo a regra que o e seguindo de ? se torna opcional
const regExp2 = /\.jpe?g/gi


//for( const arquivo of arquivos){
//    console.log(arquivo.match(regExp2));
//}

//console.log(texto2.match(regExp1));


//GREEDY E NON-GREEDY
// comportamento greedy guloso pega alem do que deveria do fechamento da tag
//console.log(html.match(/<.+>.*<\/.+>/g));

// adicionando ? o comportamento deixa de ser greedy, non-greedy
//console.log(html.match(/<.+?>.*?<\/.+?>/g));


//RANGES
// coisas entre [ ] é um conjunto, se tiver com ^ significa negação

console.log(alfabeto.match(/[^abc123]+/g))

// procurando entre o range [ - ]

console.log(alfabeto.match(/[0-9]+/g))
console.log(alfabeto.match(/[a-j]+/g))