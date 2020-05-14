const HomeModel = require('../models/HomeModels');
// a função paginaInicial

HomeModel.create({
    titulo:"Titulo teste",
    descricao:"Descricao de teste"
}).then(dados => console.log(dados))
  .catch(e => console.log(e))

exports.paginaInicial = (requisicao,resposta) =>{
    resposta.render('index');
}

//outra função que será relacionada ao post
exports.trataPost = (requisicao,resposta)=>{
    resposta.send(requisicao.body);
}


