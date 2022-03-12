//é atribuir valor atravez de um array

let numeros = [10,10,10];
let [a,b,c] = numeros; //passando os valores do array atravez da um desestruturação
console.log(a);

let letra=[12,13,14,15,16,17,18,19];
let [aa,bb, ...resto] = letra; //... pega resto dos valores contifos no array e atribui a variavel c
console.log(resto);

let valores = ['j','o','s','i','m','a','r'];
let [az,,bz,,cz]=valores; //colocar espaços vazios pula indices do array
console.log(az,bz,cz);