const nome = "Josimar";
const sobrenome = "Rachetti";
const falanome = () =>nome+' '+sobrenome;
//maneiras para exportar arquivos 
module.exports.nome = nome;
//ou so exports
exports.sobrenome = sobrenome;
//ou this 
this.falanome = falanome;
console.log(module.exports);