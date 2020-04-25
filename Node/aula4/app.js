const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'teste.txt');
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')
const pessoas = [
    {nome:'Josimar'},
    {nome:'Stefani'},
    {nome:'Bono'},
    {nome:'Gislene'}
];

//JSON.stringfy converte objeto pessoas em json
const json = JSON.stringify(pessoas,' ',2);
//escreve(caminhoArquivo,json);
async function lerArquivo(caminho){
    const dados = await ler(caminho);
    rederizaDado(dados);
}

function rederizaDado(dados){
    //convertendo dados para JSON
    dados = JSON.parse(dados);
    console.log(dados);
}

lerArquivo(caminhoArquivo);