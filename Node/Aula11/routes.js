const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')
const middleware = require('./src/middleware/middleware')

//rotas para home

//Middleware é chamado no meio de uma requisição, é executado e depois segue para req original
function meuMiddleware(req, res, next){

    console.log("passei no middleware");

    next();
}

//as rotas são chamadas do arquivo homeCroteller e sao adicionadas o metodos get post 
//para pagina inicial do servidor 
route.get('/',meuMiddleware,homeController.paginaInicial);
route.post('/',homeController.trataPost);

//rotas para o arquivo contatosCroteller
//para o link /contato
route.get('/contato',contatoController.paginaInicial)






module.exports = route;