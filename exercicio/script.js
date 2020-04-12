function MeuEscopo(){
const form = document.querySelector('.form'); //seleciona o formulario do html pela class
const resultado = document.querySelector('.resultado');
//form.onsubmit = function (evento){ }; //
 
const pessoas=[];

function recebeEventoForm (evento){
evento.preventDefault(); //impede que ao apertar o botao a pagina atualize e envie os dados
const nome = form.querySelector('.Nome'); //pega o valor do campo nome no formulario html
const sobrenome = form.querySelector('.Sobrenome');//pega o valor do campo nome no formulario html
const peso = form.querySelector('.Peso');
const altura = form.querySelector('.Altura');
informa={//cria um objeto para receber os valores do formulario
 nome:nome.value,
 sobrenome:sobrenome.value,
 peso:peso.value,
 altura:altura.value
}
pessoas.push(informa);//adiciona os valores do objeto em um array
console.log(pessoas);
resultado.innerHTML += `<p>${nome.value}${sobrenome.value}${peso.value}${altura.value}</p>`//escreve os valores buscados no formulario no hmtl.

}

form.addEventListener('submit',recebeEventoForm);
}

MeuEscopo();