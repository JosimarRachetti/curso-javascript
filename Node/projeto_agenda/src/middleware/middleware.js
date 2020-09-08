exports.meumiddleware = (req,res,next) =>{
    //o middleware consegue enviar uma variavel para todas as routes
    res.locals.errors = req.flash('errors');
    res.locals.errorsLogin = req.flash('errorsLogin');
    res.locals.success = req.flash('success');
    res.locals.successLogin = req.flash('successLogin');
    res.locals.user = req.session.user;
    res.locals.imagem = req.session.imagem;
    next();
};


//Middleware gera token para formularios
exports.CsrfToken = (req, res, next) => {
    //salvando o token em uma variavel global para views
    res.locals.tokenCsrf = req.csrfToken();
    next();

};

//Middleware feito para erro de token csurf
exports.checkCsrError = (err, req, res, next) => {
    if(err){
        return res.render('404');
    }
    next();
};

exports.loginRequire = (requisicao, resposta, next) => {
    if(!requisicao.session.user){
        requisicao.flash('errors','Você precisa fazer login para cadastrar contato.');
        requisicao.session.save(() => resposta.redirect('/'));
        return;
    }
    next();
}
