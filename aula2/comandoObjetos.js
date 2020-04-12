const produto1 = {nome:'televisão', preco:230};
const produto2 = {...produto1, material:'plastico'}//copiando objeto produto1 para produto2 é possivel criar outro valor spread
const produto3 = Object.assign({},produto1,{codigo:8989}); //copiando objeto produto1 e adicionando o valor codigo 

console.log(produto1, produto2,produto3);
Object.keys(produto1); //retorna um array com as chaves do objeto

Object.getOwnPropertyDescriptor(produto1, 'nome'); //mostra as propriedades da chave nome

Object.values(produto1); //retorna o valor das chaves do produto

console.log(Object.entries(produto1)); //retorna um array com a chave e o valor da chave









