exports.meumiddleware = (req,res,next) =>{
    //o middleware consegue enviar uma variavel para todas as routes
    res.locals.umaVariavel = "uma variavel local enviada por middleware";
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
    if(err && err.code === 'EBADCSRFTOKEN'){
        return res.send("BAD CSRF.");
    }
};
