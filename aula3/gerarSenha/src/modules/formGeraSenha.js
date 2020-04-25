import geraSenha from "./geradores"
const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtdCaracteres');
const chkMaiuscula = document.querySelector('.chk-maiusculas');
const chkMinuscula = document.querySelector('.chk-minusculas');
const chkNumero = document.querySelector('.chk-numeros');
const chkSimbolo = document.querySelector('.chk-simbolos');
const btmGerarsenha = document.querySelector('.gerarSenha');
console.log(senhaGerada);
console.log("kdddd");

export function geradora(){
    console.log("eeeeee");
    btmGerarsenha.addEventListener('click',() => {
        console.log('ummm');
        senhaGerada.innerHTML = gera();
       
    });

};

function gera(){
    const senha = geraSenha(qtdCaracteres.value,
        chkMaiuscula.checked,
        chkMinuscula.checked,
        chkNumero.checked,
        chkSimbolo.checked);
    return senha;
}