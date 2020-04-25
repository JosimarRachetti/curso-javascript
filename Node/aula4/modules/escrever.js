const fs = require('fs').promises;


//comando para escrever arquivo
//flag w apaga todo conteudo dentro do arquivo se ele ja existir
//flag a ele adiciona as frases no arquivo

//fs.writeFile(caminhoArquivo,'Frase 1\n',{flag:'a',encoding:'utf8'});

module.exports = (caminho, dados) => {
//escrevendo informações no arquivo
fs.writeFile(caminho,dados,{flag:'w'});
};