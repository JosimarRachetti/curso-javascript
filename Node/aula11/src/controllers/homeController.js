const HomeModel = require('../models/HomeModels');
// a função paginaInicial

/*HomeModel.create({
    titulo:"Titulo teste",
    descricao:"Descricao de teste"
}).then(dados => console.log(dados))
  .catch(e => console.log(e))*/

exports.paginaInicial = (requisicao,resposta) =>{
    //este dado que esta sendo enviado para sessão ficara salvo por 7 dias
    // a variavel usu esta sendo criada e salva dentro da session
    //requisicao.session.usu = {"nome":"josimar"};
    console.log(requisicao.session.usu);
    resposta.render('index');
    return;
}

//outra função que será relacionada ao post
exports.trataPost = (requisicao,resposta)=>{
    resposta.send(requisicao.body);
}


