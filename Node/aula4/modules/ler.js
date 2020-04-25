const fs = require('fs').promises;


//comando para ler arquivo
module.exports = (caminho) => fs.readFile(caminho,'utf-8');