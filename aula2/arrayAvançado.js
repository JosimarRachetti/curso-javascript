const nome =['josimar','mariana','gislene','josiane']
delete nome[2]; //vai deletar o nome do indice dois 

//valor por referencia
const nomes2 = nome;
//os dois valores apontam para o mesmo lugar da memoria
//a alteração de um irá modificar os dois
console.log(nomes2);
//para copiar um array sem modificar o anterior 
//pode se usar o spred operation [....]
const novo = [...nome];
//qualquer coisa modificada em novo não irá mudar nome
console.log(novo) 
//algumas funções basicas
novo.pop() // remove do final
novo.shift() //remover do começo e mudar todos os indices
novo.push('abel'); //adiciona no final
novo.unshift('josimar'); //adiciona do começo
novo.splice(' '); //transforma um string em um array
novo.join( );//transforma um array em uma string


///SPLICE em array

const frutas = ['maça','banana','pera', 'uva','abacaxi','abacate'];
//para remover um indice com splice
//splice(indice, delete)
const removidos = frutas.splice(4,1); //ela retorna o valor removido
console.log(frutas);
console.log(removidos);
//para adicionar um valor
//splice(indice,delete,valor para adicionar)
frutas.splice(4,0,'ameixa')
console.log(frutas);

//CONCATENANDO ARRAYS
const lista1 = [1,2,3,4];
const lista2 = [5,6,7,8];
const lista3 = lista1.concat(lista2); //concatenou duas listas

//SPREAD também concatena arrays
const lista4 = [...lista1,...lista3]; //concatenação com spread
console.log(lista4);

//FILTER -----------------------------------
//filtra arrays
//sempre irá retornar um array com a mesma quantidade ou menor de valores
const numerosdiversos = [1,23,12,45,67,89,4,56,43,57,89,76,54,35,24];
const numerosfiltrado = numerosdiversos.filter(function(valor){return valor < 50}); //função de callback dentro de filter
console.log(numerosfiltrado);


pessoas = [
    {nome: 'Josimar',idade:23},
    {nome: 'Mariana',idade:24},
    {nome: 'Gislene',idade:50},
    {nome: 'Abel',idade:65},
    {nome: 'Josiane',idade:29},
    {nome: 'Joao',idade:70},
]
 
const pessoasFiltradas  = pessoas.filter( objeto => objeto.idade < 30);//usando arrow function para filtrar array
//console.log(pessoasFiltradas);
const pessoaFiltraNome =  pessoas.filter(objeto => objeto.nome.toLowerCase().endsWith('e'));
//console.log(pessoaFiltraNome);


//MAP-------------------------
//MAP cria novo array com valores alterados
const teste = [5,10,15,20,25,30];
const testeAlterado = teste.map(valor => valor*2);
console.log(testeAlterado);
const pessoasMap = pessoas.map(objeto => `Olá ${objeto.nome}`);
console.log(pessoasMap);

//REDUCE----------------------
//Usada para reduzir o array a um unico elemento

const valores = [12,14,16,18,20,22,24,26,28,30];
const valoresReduce = valores.reduce(function(acumulador,valor){
    return acumulador = acumulador+valor; //acumulando valores do array e depois retornando o total
});
 
console.log(valoresReduce);

//Unindo REDUCE FILTER e MAP usando arrow function 

const ExemploA = [2,4,5,6,7,8,12,13,17,16,18];
const Funcaos = ExemploA.filter(valor => valor % 2 === 0
    ).map(valor => valor*2).reduce((acumulador, valor) => acumulador = acumulador + valor);

console.log(Funcaos);

//forEach ----------------
//forEach só está disponivel em arrays
const num = [2,4,6,8,10,12,14,16,18,20,24];
num.forEach( (valor,indice) => console.log(valor,indice));


