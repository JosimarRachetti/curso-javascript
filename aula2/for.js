//for(let i=0;i<5;i+=1){
//console.log(`oi ${i}`)
//}

const frutas=['maça','pera','laranja'];

for(let i=0;i < frutas.length; i++){
    console.log(`índice ${i}, ${frutas[i]}`)
}

//FOR IN  unico que funciona com objetos

const nome=['josimar','rachetti','peixoto'];

for(let y in nome){ // le os indices do array
    console.log(y);
}

//com objetos

const pessoa = {
    nome:'josimar',
    sobrenome:'rachetti',
    idade:'23'
}

for( let x in pessoa){
    console.log(x); //irá mostrar os valores das chaves do objeto
}

//FOR OF retorna o valor do indice

const exnome = 'JosimarRachetti';

for(let valor of exnome){
    console.log(valor);  //mostra o valor de cada indice do array
}
