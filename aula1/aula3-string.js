nome = 'josimar é meu nome, meu sobrenome são';
console.log(nome.concat(" Rachetti Peixoto")) // concatena string
console.log(nome + ' Rachestti Peixoto');//Outro metodo de concatenar string
console.log(`${nome} rachetti peixoto`) ;//tambem concatena string

console.log(nome.indexOf("m"))//procura uma palavra ou letra e mostra o primeiro indice onde ela começa
                              //lastIndexOf começa a procura dos ultimos lugares
console.log(nome.replace('meu','minha'));//Replace substitui uma palavra por outro
console.log(nome.length); //Tamanho de uma string

console.log(nome.slice(0,7)); //Retira um pedaço de string começando peço indice [1] até [7]
console.log(nome.slice(-4)); //Retira um pedaço de string pegando os 4 ultimos indices da string

console.log(nome.split(' ')); // a cada caractere entre parenteses encontrado, a string é divida e colocado em um espaço de um vetor

console.log(nome.toUpperCase());// deixar todas letras maisculas
console.log(nome.toLowerCase());//deixar todas letras minusculas