
// a função paginaInicial
exports.paginaInicial = (requisicao,resposta) =>{
    resposta.render('index');
}

//outra função que será relacionada ao post
exports.trataPost = (requisicao,resposta)=>{
    resposta.send(requisicao.body);
}