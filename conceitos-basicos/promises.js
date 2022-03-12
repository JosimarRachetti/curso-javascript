/* PROMISES servem para garantir que o código siga uma sequencia/ordem
as vezes é necessario esperar a resposta de um dado para
prossegir com o código
*/

function rand(num,num1){
    num*=1000;
    num1*=1000;
    return Math.floor(Math.random()*(num-num1)+num);
}

function espera(msg,tempo){
    return new Promise((resolve, reject)=> {
        if(typeof msg !== 'string') reject('Valor não aceito');
        setTimeout(()=>{
            resolve(msg);
        },tempo);
    });
}

espera(2222,rand(1,3))
.then(resposta =>{//console.log(resposta);
        return espera('Segundo comando',rand(1,3));}) //sempre que then é chamado resolve dentro de promise será executado
.then(resposta =>console.log(resposta))//pode se passar outro comando com um novo then
.catch( e =>{ console.log("ERROR",e)}) //sempre que catch é chamado rejeitada será executada quando ocorrer um erro ou valor não for aceito

//Promise.all - ele recebe um array com promises e usa apenas um then para todos juntos
const promises = ["Promise",espera('PromiseUm'),espera('PromiseDois'),espera('PromiseTres')];

Promise.all(promises).then(function(Value){
    console.log(Value);
}).catch(function(erro){
    console.log(erro);
})

//Promise.race - a promise race o valor mais rápido ele irá retornar primeiro

//Promise.resolve

//Promise.reject