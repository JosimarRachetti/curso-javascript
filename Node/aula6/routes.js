const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController')

//rotas para home

//as rotas são chamadas do arquivo homeCroteller e sao adicionadas o metodos get post 
//para pagina inicial do servidor 
route.get('/',homeController.paginaInicial);
route.post('/',homeController.trataPost);

//rotas para o arquivo contatosCroteller
//para o link /contato
route.get('/contato',contatoController.paginaInicial)






module.exports = route;