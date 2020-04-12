let titulo = Number(prompt("Digite o titulo:")); //recebe um valor do usuario atraves de uma caixa de texto
titulo2 = document.getElementById("TituloSite"); // busca no documento HTML o campo (div,nav,artivle etc..) com id informado em aspas e atribui para a variavel
titulo2.innerHTML = titulo; //titulo2 que recebeu o campo, agora passa um valor para esse campo que ira mudar o documento html



titulo2.innerHTML +=`<p>A raiz quadrada de ${titulo} é: ${titulo**0.5}</p><p>Numero arredondado para cima é ${Math.round(titulo)}</p>`
titulo2.innerHTML +=`<p>O numero arredondado para baixo é ${Math.floor(titulo)}</p>`









