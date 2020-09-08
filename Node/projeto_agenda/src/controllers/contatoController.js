const Contato = require('../models/ContatoModel')

exports.index = (requisicao, resposta) => {
        resposta.render('index-contato', {contato:{}});
};

exports.register = async (requisicao, resposta) => {
    try{
        const contato = new Contato(requisicao.body);
        await contato.register();

        if(contato.errors.length > 0){
           requisicao.flash('errors',contato.errors);
           requisicao.session.save(() => resposta.redirect('back'));
           return;
        }

        requisicao.flash('success',"Contato foi registrado com sucesso.");
        requisicao.session.save(() => resposta.redirect(`/contato/register/${contato.contato._id}`));
        return;
     } catch (e){
        console.log(e);
        return resposta.render('404');
     }
};

exports.editaContato = async (requisicao, resposta) => {
    if(!requisicao.params.id) return resposta.render('404');
    const contato = await Contato.buscaPorId(requisicao.params.id);

    if(!contato) return resposta.render('404');
    resposta.render('index-contato', { contato });

};

exports.edita = async (requisicao, resposta) => {
    try{
        if(!requisicao.params.id) return resposta.render('404');
        const contato = new Contato(requisicao.body);
        await contato.edita(requisicao.params.id);

        if(contato.errors.length > 0){
           requisicao.flash('errors',contato.errors);
           requisicao.session.save(() => resposta.redirect('back'));
           return;
        }

        requisicao.flash('success',"Contato foi atualizado com sucesso.");
        requisicao.session.save(() => resposta.redirect(`/contato/register/${contato.contato._id}`));
        return;
    }catch(e){
        console.log(e);
        resposta.render('404');
    }

}