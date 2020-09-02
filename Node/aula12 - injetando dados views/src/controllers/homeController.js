const HomeModel = require('../models/HomeModels');
// a função paginaInicial

exports.paginaInicial = (requisicao, resposta) =>{
    // dentro do render pode se enviar variaveis para os views
    resposta.render('index',{
        titulo:"Hello!! welcome on my site, feel free for enjoy all functionalities and tools, everything for free",
        numeros: [1,2,3,4,5,6,7,8,9]
    });
    return;
}

//outra função que será relacionada ao post
exports.trataPost = (requisicao, resposta)=>{
    resposta.send(requisicao.body);
}


