require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
//conexao na base de dados do mongo

mongoose.connect(process.env.CONNECTIONSTRING,{ useNewUrlParser: true, useUnifiedTopology:true})
    .then(()=>{ 
        //com then e a função emit o servidor so começar rodar quando se conectar a base de dados mongo
        console.log('servidor pronto');
        app.emit('pronto');
    })
    .catch(e => console.log(e));
const routes = require('./routes');
const path = require('path');
const meumiddleware = require('./src/middleware/middleware')

//configurando o caminho da pasta public onde estarao os arquivos css, imagens, entre outros..
app.use(express.static(path.resolve(__dirname,'public')));

app.use(express.urlencoded({extended:true}));
//configurando o caminho da views
app.set('views',path.resolve(__dirname,'src','views'));
//engine para o html
app.set('view engine','ejs');

app.use(meumiddleware);

//todas as rotas do arquivo routes são chamadas aqui
//diminuindo a quantidade de codigo nesse arquivo, deixando mais organizado
app.use(routes);

//Quando o banco de dados ficar pronto a função emit chama a função on com nome pronto e roda o servidor
app.on('pronto',()=>{
//porta de requisição 
app.listen(3000,()=>{
    console.log('http://localhost:3000');
    console.log('servidor executando na porta 3000');
});    
});
