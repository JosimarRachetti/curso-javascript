//função imediatas, retornam o valor imediatamente - IIFE
// pode se definir qualquer coisa dentro desta função que sera protegida pelo escopo global
//pode se criar funções dentro de funções e etc
(function(){
    function nome(nome, sobrenome){
        return 'Olá '+ nome + ' '+ sobrenome
    }
    function escreveNome(){
        console.log(nome('Josimar','Rachetti'));
    }
    escreveNome();
})();

//FUNCTION FACTORYS
//funções que criam objetos 

function criaPessoa(name, lastname,age, height){
    return{ //retorna um objeto 
        nome:name,
        sobrenome:lastname,
        idade:age,
        altura:height,
        nomeCompleto(){   //é possivel criar uma função dentro de um metodo
            return this.nome+ ' '+this.sobrenome;
        },
        get idadeAltura(){ // com o get a função criada se transforma em um metodo
            return this.idade+' '+this.altura;
        }                               
    } 
}

const p1 = criaPessoa('JOSIMAR','RACHETTI',18,1.90);
console.log(p1.nomeCompleto());//chamando uma função criada dentro de metodo
console.log(p1.idadeAltura);//função criada dentro de metodo e convertida em metodo com o GET 



