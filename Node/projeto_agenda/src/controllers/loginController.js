Login = require('../models/LoginModels');
UploadFile = require('../models/UploadModel')
formidable = require('formidable');
fs = require('fs');

exports.index = (requisicao, resposta) => {
    if(requisicao.session.user){image(requisicao, resposta);return;}
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

        const upload = new UploadFile(login.user._id,"");
        await upload.findFoto();
        if(upload.imagem) {
            requisicao.session.imagem = 'data:image/jpeg;base64,' + upload.imagem.foto.toString('base64');
        }

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

exports.uploadDocument = (requisicao, resposta) => {
    var form = new formidable.IncomingForm();
    form.parse(requisicao, function(err, fields, files) {
        var img = files.imageUser;
        fs.readFile(img.path,  async function(err, data){
            const upload = new UploadFile(requisicao.session.user._id,data);
             await upload.uploadFoto();
             resposta.render('login-minhaconta');
        });
    });
}

image = async (requisicao, resposta) => {
    const upload = new UploadFile(requisicao.session.user._id,"");
    await upload.findFoto();
    if(upload.imagem) {
        requisicao.session.imagem = 'data:image/jpeg;base64,' + upload.imagem.foto.toString('base64');
    }
    requisicao.session.save(function (){
        resposta.render('login-minhaconta');
    });

}