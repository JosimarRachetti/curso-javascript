const Contato = require("../models/ContatoModel");

const HomeModel = require('../models/HomeModels');
// a função paginaInicial

exports.index = async(requisicao, resposta) =>{
    const contatos = await Contato.buscaContatos();
    // dentro do render pode se enviar variaveis para os views
    resposta.render('index', { contatos });
}



