//declarando funções 
//function hoistin, a função pode ser chamada antes de ser declarada 
falaOi(); 

function falaOi(){
    console.log('Oi');
}
//function expresssion - declara uma constante como uma função

const digaOla = function(){
    console.log('diga ola');
}

digaOla();

//arrow function  - tem uma seta que parece uma flecha na ponta
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
//ARROW FUNCTION NÃO TEM ARGUMENTS 
funcaoArrow();

//dentro de um objeto pode ter uma função
const objeto = {
    falar(){
        console.log('falando dentro objeto')
    }
};

objeto.falar();
 /// PARAMETROS
 //nas funções em javascript você pode adicinar argumentos não declarados,
 // eles ficaram salvos numa array arguments dentro da função

 function teste(){
     console.log(arguments[3]);//será exibido o argumento de indece tres
 }
 teste(1,2,3,4,5,6,7,8,89);

 //caso a função receba menos argumentos do que declarado nos paramentos
 //o parametro recebera valor de undefinid

function testeParametro(a,b,c){
    console.log(a,b,c); //c receberá o valor undefined
}
testeParametro(1,2);

//para um parametro de uma função ter um valor padrao basta colocar o valor igual na frente

function soma(a,b=4,c=4){ //caso não seja atribuido um valor para os parametros a e b seus valores assumirao o que esta na frente
    console.log(a+b+c);
}
soma(10,2,undefined) // Caso deseje que o parametro assuma o valor padrao deve colocar undefined no argumento

// outra forma da função pegar todos os argumentos sem precisar declarar um por um, é usando o rest operator
// o rest operation são ... antes do argumento da função
function somar(...argume){
    console.log(argume);
}
somar(99,99,99,99);









