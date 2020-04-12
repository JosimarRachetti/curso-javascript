//função retornar um numero maior entre dois
//usando if
function maior(num1,num2){
    if(num1 > num2){ return num1; }
    return num2;
};
//usando operação ternaria
function maior2(num1, num2){
    return num1 > num2 ? num1 : num2
}
// usando operação arrow
const maior3 = (num1, num2) => num1 > num2 ? num1 : num2;


const resp = maior(25, 15);
const resp1 = maior2(35, 20);
const resp2 = maior3(35, 40);
console.log(resp, resp1, resp2);

//retorna se a largura e maior que altura 

const tamimage = (largura, altura) => largura > altura;

console.log(tamimage(500,300));

function divisao(num){
    if(typeof num !== "number") return NaN;
    if(num % 3 === 0  && num % 5 === 0) return 'FizzBuzz'
    if(num % 3 === 0) return 'Fizz'
    if(num % 5 === 0) return 'Buzz'
    return num;
}

valor = divisao(15);
console.log(valor);