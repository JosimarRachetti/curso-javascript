// função construtoras retorna objetos
// Função Construtoras sempre inicia com letra maiúsculas
 // são moldes de objetos
 //sempre são chamadas com NEW na frente.

 function Pessoa(nome, sobrenome, idade){
     this.nome = nome;
     this.sobrenome = sobrenome;
     this.idade = idade;
 }

 const p1 = new Pessoa('josimar','Rachetti','21');

 console.log(p1);
 //ou
 console.log(p1.nome);

 //FUNÇÃO RECURSIVA
 //são funções que se chama até atingir um objetivo
 //como se fosse um for

 function recursivo(max){
     console.log(max);
     if(max >= 10) return;
     max++;
     recursivo(max); // a função chamando ela mesmo
 }

 recursivo(0);

 //FUNÇÃO GERADORAS
 // são funções que podem entregam valores diferentes conforme forem chamadas

 function* geradora(){
     //Código 
     yield 'Primeiro valor retornado'

     yield 'Segundo valor retornado'

     yield 'Terceiro valor retornado'
 }

 const gerado1 = geradora();
 console.log(gerado1.next().value) // para que a função retorne o valor é necessário o next e o value senão ela retornará um objeto

 function* geradora2(){
    let valor = 0
    while(true){        //está função geradora retorná infinitamente um valor
        yield valor;
        valor++;
    }
 }

 const g2=geradora2();
 console.log(g2.next().value)
 console.log(g2.next().value)
 console.log(g2.next().value)
 console.log(g2.next().value)

 //funções geradoras tambem  podem chamar outras funções

 function* geradoraEx(){
     yield function(){
         console.log('primeiro yield');
     }

     yield function(){
         console.log(2+2);
     }
 }

const g3 = geradoraEx();
const funcao1 = g3.next().value; // atribuindo a função
const funcao2 = g3.next().value;

funcao1();
funcao2();