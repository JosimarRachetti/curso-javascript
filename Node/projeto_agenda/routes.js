const express = require('express');
const route = express.Router();

const middleware = require('./src/middleware/middleware').CsrfToken

//rotas para home

const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')


//Middleware é chamado no meio de uma requisição, é executado e depois segue para req original
function meuMiddleware(req, res, next){

    console.log("passei no middleware");

    next();
}

//as rotas são chamadas do arquivo homeController e sao adicionadas o metodos get post
//para pagina inicial do servidor 
route.get('/',middleware,homeController.index);

//rotas de login
route.get('/login/index',loginController.index);
route.post('/login/register',loginController.register);
route.post('/login/login',loginController.login);
route.get('/login/logout',loginController.logout);

module.exports = route;