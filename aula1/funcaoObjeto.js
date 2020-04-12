function exemplo(nome){
    
    return `Olá ${nome}`
}
function soma(n1,n2){
    return n1+n2;
}
console.log(exemplo('josimar'));
exemplo('mariana');

console.log(soma(9,8));
//outro jeito de criar uma fução 
const raiz = function(n){
    return n**0.5
};
console.log(raiz(9));

//OBJETO
let pessoa={ // objeto sao como variaveis com varias informações contidas
    nome:'josimar',
    sobrenome:'Rachetti',
    idade:23,
    cidade:'cotia'
}

console.log(pessoa.nome);//para chamar o valor dentro do objeto se escreve o valor da variavel e o campo separado por ponto

function pessoa2(name,lastname,age){ //função com objeto dentro
    return{
        nome:name,
        sobrenome:lastname,
        idade:age
    }
}

let pessoa22 = pessoa2('iris','Neves',23); // cria variavel que vai receber o objeto 

console.log(pessoa22.nome);