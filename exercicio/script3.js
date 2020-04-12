const paragrafo = document.querySelector('.container'); //retorna div com class container

const linhapara = paragrafo.querySelectorAll('p');// retorna todos os paragrafos na div selecionada

const estilobody = getComputedStyle(document.body); //pega todos os estilos do body contindos no css

const estilobackgroudbody = estilobody.backgroundColor; //pega valor da cor de fundo do body 

console.log(estilobackgroudbody);

for(let y of linhapara){
    y.style.backgroundColor = estilobackgroudbody; // passa cor do background color do body e passa para p
    y.style.color = '#FFFFFF';

}