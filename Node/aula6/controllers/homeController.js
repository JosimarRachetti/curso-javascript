
// a função paginaInicial
exports.paginaInicial = (requisicao,resposta) =>{
    resposta.send(`
    <form action="/" method="POST">
    Nome:<input type="text" name="nome">
    <button>enviar relatorio</button>
`);
}

//outra função que será relacionada ao post
exports.trataPost = (requisicao,resposta)=>{
    resposta.send(
        "Novo POST"
    );
}