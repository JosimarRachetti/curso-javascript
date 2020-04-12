const elementos = [
    {tag:'p', texto:'Objeto paragrafo'},
    {tag:'div', texto:'Objeto div'},
    {tag:'section', texto:'Objeto section'},
    {tag:'footer', texto:'Objeto footer'}

];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i=0; i < elementos.length; i++){
let{ tag, texto } = elementos[i];
let tagCriada = document.createElement(tag);
tagCriada.innerHTML = texto;
/*segunda opcao seria tagCriada.innerText*/
div.appendChild(tagCriada);
}

container.appendChild(div);