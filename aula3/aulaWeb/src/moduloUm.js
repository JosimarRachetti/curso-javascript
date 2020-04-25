
const nome = 'JOSIMAR';
const sobre = 'RACHETTI';
const idade = 30;
function soma(x,y){
    return x+y;
}

export class Pessoa{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
}


export {nome,sobre,idade,soma};
//Export - exporta as variaveis funções e classes para outras .JS 
//pode ser direto antes de definir a variavel e a class 
// ou no final passando o nome