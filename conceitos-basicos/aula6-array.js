nomes = ['Carol','Carlos','Beatriz','Beto'];
nomes.push('Fabio'); //adiciona valores ao final do array
nomes.unshift('Amanda') //adiciona valores no começo do array
nomes[2]='Caroline' //Muda o valor da posição do array informada
console.log(nomes);
nomes.pop(); // remove valores no final do array
console.log(nomes);
nomes.shift(); //remove valores no inicio do array
console.log(nomes);
console.log(nomes.slice(0,3)); //mostra um pedaço do array apenas,no caso os tres primeiros elementos
