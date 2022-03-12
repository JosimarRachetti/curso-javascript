const data = new Date(); //retorna a data do dia atual
console.log(data.toString());

const data2 = new Date(0); //retorna a data 01/01/1970
// se modificar o 0 dentro do parentes a data muda, se for positivo muda para frente
// se for negativo para tras

// para formatar data pode ser new Date(2020,0,4,1,30,800 )// a sequencia seria ano mes dia, depois hora minutos segundos e milisegundos

//Outro forma de formatação
//new Date('2019-04-20 20:20:20');
// comandos para obter informações de data
// data.getDate // dia do mes // mes começa 0 e vai ate 11
// data.getMonth // mes
// data.getFullYear // ano
// data.getHours // horas
// data.getMinutes // minutos
//data.getSeconds // segundos
//data.getMilliseconds // milisegundos
//data.getDay // dia da semana// domingo sendo 0 e sabado sendo 6
