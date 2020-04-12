/*Protótipo é o termo usado para se referir ao que foi
criado pela primeira vez, servindo de modelo ou molde para futuras produções.

todos os objetos tem uma referencia interna para um prototipo (_proto_)
que vem de propriedade prototype da função construtora que foi usada para
criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor
do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos
é usada até o topo (null) até encontrar (ou não) tal membro.

*/

function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome=sobrenome;
    this.nomeCompleto = () => this.nome + ' '+ this.sobrenome;
}

Pessoa.prototype.digaOla = () => 'Olá visitante';  //com protype é possivel salvar na memoria proto metodos ou chaves

const pessoa1 = new Pessoa('josimar','Rachetti');

console.log(pessoa1);

// MANIPULANDO PROTOTYPE
const Obj1 = {
    chave1: 1
}
const Obj2 = {
    chave2: 2
}

const Obj3 = {
    chave3: 3
}

Object.setPrototypeOf(Obj1,Obj2);//configura o prototype do objeto 

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
    this.desconto = 0;
}

Produto.prototype.descontoValor = function(valor){
    this.desconto = this.preco*(valor/100);
    this.preco = this.preco - this.desconto;
};

const produto1 = new Produto('Notebook',1200);
produto1.descontoValor(20);
console.log(produto1);

// para reutilizar o prototype do produto1 usa-se a função setPrototype

const produto2 = new Produto('Televisão',1500);

Object.setPrototypeOf(produto2,Produto.prototype);

produto2.descontoValor(10);
console.log(produto2);

//criando um objeto com prototype ja modificado

const produto3 = Object.create( Produto.prototype, {
    preco:10,
    tamanho:42
});

// HERENÇA 
//
function Roupas(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

function Camiseta(nome,preco,tamanho,cor){
    Roupas.call(this,nome,preco); //herança da função construtora roupas
    this.tamanho = tamanho;
    this.cor = cor;
}

function Calca(nome,preco,tamanho,tecido){
    Roupas.call(this,nome,preco); //herança da função construtora roupas 
    this.tamanho = tamanho;
    this.tecido = tecido;
}

const camisa1 = new Camiseta('golav',20,'M','azul');
console.log(camisa1);
const calca1 = new Calca('renner',89,38,'jeans');
console.log(calca1);