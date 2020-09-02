
exports.index = (requisicao, resposta) => {
    resposta.render('login');
};

exports.register = (requisicao, resposta) => {
    resposta.send("ola");
};