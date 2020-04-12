let controle = 0;


while(controle < 10){
    console.log(controle);
    controle++;
}


function random(min, max){
    const r=Math.random()*(max - min) + min; // seleciona um numero aleatorio entre o min e o maxi
    return Math.floor(r); //retorna numero inteiro
};

let rand = random(1, 50); //chama função para numero aleatorio

console.log(rand);

do{
console.log(rand);
rand = random(1, 50);
}while(rand != 10);

// Palavras Break e continue funcionam em todos os lanços
// seja for while ou do while

const numeros = [1,2,3,4,5,6,7,8,9]

for(let numero of numeros){
    if(numero % 2 === 1){
        continue; //esse comando faz o laço pular para proxima ação do laço
    }
    console.log(numero)
}

// palavra break sai do laço




