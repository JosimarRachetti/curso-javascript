Login = require('../models/LoginModels');

exports.index = (requisicao, resposta) => {
    resposta.render('login');
};

exports.register = async (requisicao, resposta) => {
    try{
    const login = new Login(requisicao.body);
    await login.register();
    if(login.errors.length > 0){
         requisicao.flash('errors', login.errors);
         requisicao.session.save(function (){
                 resposta.redirect('back');
             });
         return;
        };


    requisicao.flash('success',"seu usuario foi criado com sucesso");
    requisicao.session.save(function (){
        resposta.redirect('back');
    });
        return;
    }catch (e){
        console.log(e);
        resposta.render('404');
    };
};