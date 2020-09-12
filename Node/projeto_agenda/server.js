require('dotenv').config();

const express = require('express');
const app = express();
//conexao na base de dados do mongo
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING,{ useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify:false})
    .then(()=>{ 
        //com then e a função emit o servidor so começar rodar quando se conectar a base de dados mongo
        console.log('servidor pronto');
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const {meumiddleware, checkCsrError, CsrfToken} = require('./src/middleware/middleware')
//esse trecho do codigo serve para o armazenamento do coockie, pequenas informações do usuario 
//para armazenar essas pequenas informações é necessario construir uma session
const session = require('express-session');
const MongoStore = require("connect-mongo")(session);
const flash = require('connect-flash');
//chama o helmet
const helmet = require('helmet');
//chama csurf
const csurf = require('csurf');



const sessionOptions = session({
    secret:'palavrasecreta',
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    resave: false,
    cookie:{maxAge:60000,
            httpOnly:true}
});

//chama a sessão que foi construída acima
app.use(sessionOptions);
app.use(flash());
//configurando o caminho da pasta public onde estarao os arquivos css, imagens, entre outros..
app.use(express.static(__dirname+'/public'));
app.use(express.urlencoded({extended:true}));
//configurando o caminho da views
app.set('views',path.resolve(__dirname,'src','views'));
//engine para o html
app.set('view engine','ejs');

//chama o csurf
app.use(csurf());
//chamando o middleware que gera token
app.use(CsrfToken);
//chama o middleware
app.use(meumiddleware);
//chamando middleware error de token csurf
app.use(checkCsrError);

//todas as rotas do arquivo routes são chamadas aqui
//diminuindo a quantidade de codigo nesse arquivo, deixando mais organizado
app.use(routes);
//invocando o helmet
app.use(helmet());




//Quando o banco de dados ficar pronto a função emit chama a função on com nome pronto e roda o servidor
app.on('pronto',()=>{
//porta de requisição 
app.listen(3000,()=>{
    console.log('http://localhost:3000');
    console.log('servidor executando na porta 3000');
});    
});
