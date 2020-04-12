
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

//asyc e await assim como then serve para torna uma função com execução assincrona, 
//com execução em sequencia


/* Promises tem tres estados
pending ->  pedente
fullfilled -> resolvida
rejected -> rejeitada

*/
async function executa(){
   try{
    const fase1 = await espera('Fase 1',rand());
    console.log(fase1);
    const fase2 = await espera(3,rand());
    console.log(fase2);
    const fase3 = await espera('Fase 3',rand());
    console.log(fase3);
    const fase4 = await espera('Fase 4',rand());
    console.log(fase4);}
    catch(e){ //catch e try sendo usado para tratar o erro quando aparecer 
        console.log(e);
    }
}

executa();