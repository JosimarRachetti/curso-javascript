const fs = require('fs').promises;
const path = require('path');

//fs le um diretorio e devolve as pastas que contem no mesmo
//path é usado para ler os arquivos da pasta atual 

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files,rootDir);
}

async function walk(files,rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);
        if(stats.isDirectory()){
            readdir(fileFullPath);
            continue;
        }
        //filtra apenas arquivos com .js são expostos
        if(!/\.js$/g.test(fileFullPath))continue;

        console.log(file,stats.isDirectory());
    }
}

readdir('/Users/Josimar Rachetti/Desktop/HTML-JAVASCRIPT/Javascript/Node');