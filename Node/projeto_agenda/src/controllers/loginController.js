Login = require('../models/LoginModels');

exports.index = (requisicao, resposta) => {
    if(requisicao.session.user) return resposta.render('login-minhaconta');
    return resposta.render('login');
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

exports.login = async (requisicao, resposta) => {
    try{
        const login = new Login(requisicao.body);
        await login.login();
        if(login.errors.length > 0){
            requisicao.flash('errorsLogin',login.errors);
            requisicao.session.save(function (){
                resposta.redirect('back');
            });
            return;
        };

        requisicao.flash('successLogin',"login com sucesso.");
        requisicao.session.user = login.user;
        requisicao.session.save(function (){
            resposta.redirect('back');
        });
        return;
    }catch (e){
        console.log(e);
        resposta.render('404');
    };
};

exports.logout = (requisicao, resposta) => {
  requisicao.session.destroy();
  resposta.redirect("/login/index");
};