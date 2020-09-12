Login = require('../models/LoginModels');
UploadFile = require('../models/UploadModel')
formidable = require('formidable');
fs = require('fs');

exports.index = (requisicao, resposta) => {
    console.log("index login controller");
    if(requisicao.session.user) return resposta.render('login-minhaconta');
    return resposta.render('login');
};

exports.register = async (requisicao, resposta) => {
    try{
        console.log("register login controller");
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
        console.log("login login controller");
        const login = new Login(requisicao.body);
        await login.login();
        if(login.errors.length > 0){
            requisicao.flash('errorsLogin',login.errors);
            requisicao.session.save(function (){
                resposta.redirect('back');
            });
            return;
        };

        console.log("--------uploadFile")
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
    console.log("logout login controller");
    requisicao.session.destroy();
    resposta.redirect("/login/index");
};

exports.uploadDocument = (requisicao, resposta) => {
    console.log("Upload docs login controller");
    const form = new formidable.IncomingForm();
    form.parse(requisicao, function(err, fields, files) {
        const img = files.imageUser;
        fs.readFile(img.path,  async function(err, data){
            if(data.byteLength === 0){
                requisicao.flash('errorsUpload',"campo vazio, por favor selecione uma imagem");
                requisicao.session.save(function (){
                    resposta.redirect('/login/index');
                });
                return;
            }

            const upload = new UploadFile(requisicao.session.user._id,data);
            await upload.uploadFoto();
            resposta.redirect('/login/image');

        });

    });
}

exports.image = async (requisicao, resposta) => {
    console.log("image login controller");
    const upload = new UploadFile(requisicao.session.user._id,"");
    await upload.findFoto();
    if(upload.imagem) {
        requisicao.session.imagem = 'data:image/jpeg;base64,' + upload.imagem.foto.toString('base64');
    requisicao.session.save(function (){
        resposta.render('login-minhaconta');
    })};
    return;
}