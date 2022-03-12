let num = 123;
num.toString(); // converte numero para string
console.log(num);

let num1 = 12.31123123123
console.log(num1.toFixed(2)); // função toFixed arrendoo numero para numero 
                             // de casas decimais informados dentro do console.log

console.log(Number.isInteger(num)); //função verifica se é um numero inteiro, retorna true ou false
console.log(Number.isNaN(num1)); // Verifica se a variavel NÃO É um numero, retorna true ou false

let num2 = 0.7;
let num3 = 0.1;
num4=num2+num3;
console.log(num4);
//ao somar dois numeros nao inteiros o JS retorna um valor não preciso 0.7+0.1 se torna 7.999
// para resolver o problema é preciso inserir um parseFloat e definir que numero so tenha duas casas decimais
console.log(parseFloat(num4.toFixed(2)))