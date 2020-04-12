
const botao = document.querySelector("#enviar");

function confereValor(valor){
    divErro = document.getElementById(valor);
    pDiv = divErro.querySelector('.textoInput').innerText;
    input = divErro.querySelector('.inputdados');
    div = divErro.querySelector('div');
    if(input.value ===""){
       div.innerText=`${pDiv} vazio`;
       return  false;
    }
    div.innerText = "";
    console.log("alo")

    return true;
}

function validadeCPF(valor){
    divcpf = document.getElementById(valor);
    cpf = divcpf.querySelector('.inputdados');
    resposta = validacaocpf(cpf);
    if(!resposta){ 
        respo = divcpf.querySelector('#erroCpf');
        respo.innerText += "cpf inválido";
    }
    console.log(resposta);
}

function validacaocpf(cpfv){
    cpf = cpfv.value.replace(/\D+/g,'');
    arrayCpf = Array.from(cpf);
    arrayCpf.splice(9);
    digitoUm = converte(arrayCpf,10);
    digitoDois = converte(arrayCpf,11);
    valido = arrayCpf.join().replace(/\D+/g,'') === cpf ? true : false;
    return valido;
}

function converte(array,i){
    let Nvalor;
    const array2 = array.map(valor=>{Nvalor = Number(valor)*i;--i;return Nvalor});
    const somaArray = array2.reduce((acumu,valor)=> acumu+valor);
    const predigito = 11-(somaArray%11);
    const digito = predigito >= 10 ? 0 : predigito;
    let digi = digito.toString();
    this.arrayCpf.push(digi);
    return digi;
}

function tamUsuario(valor){
    divUsu = document.getElementById(valor);
    inpuUsu = divUsu.querySelector('#usuario');
    tamUsu = inpuUsu.value;
    if(tamUsu.length < 12){
        respo = divUsu.querySelector('#erroUsuario');
        respo.innerText += "Tamanho de usuário menor que permitido";
    }
}

function confereCpf(valor){
    if(confereValor(valor)){
        validadeCPF(valor);
    }
}


function confereUsuario(valor){
    if(confereValor(valor)){
        tamUsuario(valor);
    }
}

function comparaSenha(valor,valorDois){
    console.log(valor,valorDois)
    divSenha = document.getElementById(valor);
    divCsenha = document.getElementById(valorDois);
    console.log(divSenha, divCsenha)
    senhaUm = divSenha.querySelector(".inputdados");
    senhaDois = divCsenha.querySelector("#confirmasenha");
    if(senhaUm.value !== senhaDois.value){
       divErroSenha = divCsenha.querySelector("#erroCSenha")
       divErroSenha.innerText += "Senha são diferentes" 
    }
}
function confereSenha(valor,valorDois){
    a=confereValor(valor);
    b=confereValor(valorDois);
    
    if(a && b){
     comparaSenha(valor,valorDois);
    }
}

botao.addEventListener('click',function(e){
    confereValor("Nome");
    confereValor("Sobrenome");
    confereCpf("cpf");
    confereUsuario("Usuario");
    confereSenha("Senha","senhaConfirma");
});


