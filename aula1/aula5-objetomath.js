// Math. traz diversas formulas matematicas para codigo JS, alguns exemplos abaixo.
let num = 10.50;
let num1= Math.floor(num) // arredonda para baixa 
let num2=Math.ceil(num)//arredonda para cima
let num3 = Math.round(num) // arredonda para o mais proximo
console.log(num1,num2,num3)

console.log(Math.max(1,2,3,4,5,6,7,333,4,34,5,63456,354,5654)) // Max retorna o maior numero da sequencia informada
console.log(Math.min(1,2,3,4,5,6,7,333,4,34,5,63456,354,5654)) // Min retorna o menor numero

 Math.random()// sempre ira gerar numeros aletorios entre 1 e 0. Mas o 1 nunca ira aparecer
                            // para transformar esses numeros quebrados em inteiros aleatorios utiliza o round e contas mateticas
//exemplo abaixo gera numeros aleatoria entre 5 e 15
let aleatorio = Math.round(Math.random()*(15-5)+5);
console.log(aleatorio)

//dica para raiz quadrada o numero elevado a 0.5
numero = 9;
console.log( numero ** 0.5);

//segunda dica. 100 divido por 0 não da erro, retorna uma valor chamado infinity 
console.log(100/0)