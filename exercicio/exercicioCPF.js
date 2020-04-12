// Validando o CPF

const cpf ='460.507.458.-97';

let cpfSemNumero = cpf.replace(/\D+/g,''); //o valor /\D+/g substitui todo valor não numerico por vazio

let cpfArray = Array.from(cpfSemNumero);
let digitosCpf = cpfArray.splice(9);

MultiplicarArray = (array,i) => array.map(valor=>{NovoValor = Number(valor)*i;--i;return NovoValor});
let CpfArrayDigiUm = MultiplicarArray(cpfArray,10);

SomaCpf = Array => {return Array.reduce((acumu,valor) => acumu + valor);}
let CpfSomado= SomaCpf(CpfArrayDigiUm);
CalculaDigito = array => {d = (11-(array % 11));if(d>=10){return 0;};return d;}
let DigitoUm = CalculaDigito(CpfSomado);

cpfArray.push(DigitoUm);
let CpfArrayDigiDois= MultiplicarArray(cpfArray,11);
let CpfSomado2 = SomaCpf(CpfArrayDigiDois);
let DigitoDois = CalculaDigito(CpfSomado2);
cpfArray.push(DigitoDois);
cpfFinal = cpfArray.join().replace(/\D+/g,'');
cpfFinal === cpfSemNumero ? console.log("CPF válido") : console.log("CPF inválido");


//OUTRO METODO
function ValidaCpf(cpfEnviado){
    Object.defineProperty(this, cpfEnviado,{
        get: function(){
            return cpfEnviado.replace(/\D+/g,'');
        }
    });
}

ValidaCpf.prototype.valida()=function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    return true;
}

ValidaCpf.prototype.criaDigito = function(cpfParcial){
    
}