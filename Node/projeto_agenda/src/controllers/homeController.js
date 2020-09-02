const HomeModel = require('../models/HomeModels');
// a função paginaInicial

exports.index = (requisicao, resposta) =>{
    // dentro do render pode se enviar variaveis para os views
    resposta.render('index');
}



