const express = require('express');
const app = express();


//CRUD -> CREATE, READ, UPDATE, DELETE
//          POST   GET   PUT    DELETE
//São funções que uma API deve ser capaz de realizer
//nessa aula sera sobre GET

//esse trecho serve para que o get consiga para informaçãoes do body e enviar ao put
app.use(express.urlencoded({extended:true}));




//o metodo get pega uma informação 
app.get('/',(requisicao, resposta)=>{
    //resposta enviada para requisicao
    resposta.send(`
        <form action="/" method="POST">
        Nome:<input type="text" name="nome">
        <button>enviar relatorio</button>
    `);
});
// com o /teste esta sendo chamado outro get
//o idUsuario são parametro que podem ser enviado ex: testes/122312
//mas para esse  parametro nao ser obrigatorio, deve ser colocado o simbolo ?
app.get('/testes/:idUsuario?',(requisicao,resposta)=>{

    console.log(requisicao.params);
    //na requisiçao de query sao logados os dados enviados via url
    //                                   query
    //ex: http://site/testes/parametros?nome=josimar&profissao=rachetti
    console.log(requisicao.query)

    resposta.send('Oi ' + requisicao.params.idUsuario);
});

//metodo post recebe a informação
app.post(`/`,(requisicao,resposta)=>{
    resposta.send(`OK, recebimento confirmado <br> informação recebida foi ${requisicao.body.nome}`)
});

//porta de requisição 
app.listen(3000,()=>{
    console.log('http://localhost:3000');
    console.log('servidor executando na porta 3000');
});