const express = require('express');
const app = express();
const routes = require('./routes');


app.use(express.urlencoded({extended:true}));

//todas as rotas do arquivo routes são chamadas aqui
//diminuindo a quantidade de codigo nesse arquivo, deixando mais organizado
app.use(routes);

//porta de requisição 
app.listen(3000,()=>{
    console.log('http://localhost:3000');
    console.log('servidor executando na porta 3000');
});