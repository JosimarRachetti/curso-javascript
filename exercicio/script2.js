
function diasemanaconversao(semana){
switch(semana){
case 0:
    return 'Domingo'
    break;
case 1:
    return 'Segunda'
    break;
case 2:
    return 'Terça'
    break;
case 3:
    return 'Quarta'
    break;
case 4:
    return 'Quinta'
    break;
case 5:
    return 'Sexta'
    break;
case 6:
    return 'Sabado'
    break;

}}

function mesconversao(mes){
switch(mes){
case 0:
    return 'Janeiro'
    break
case 1:
    return 'Fevereiro'
    break
case 2:
    return 'Março'
    break
case 3:
    return 'Abril'
    break
case 4: 
    return 'Maio'
    break
case 5: 
    return 'Junho'
    break
case 6: 
    return 'Julho'
    break
case 7: 
    return 'Agosto'
    break
case 8: 
    return 'Setembro'
    break
case 9: 
    return 'Outubro'
    break
case 10: 
    return 'Novembro'
    break
case 11: 
    return 'Dezembro'
    break
}

}

data = new Date();
dia = data.getDate();
mes = mesconversao(data.getMonth());
ano = data.getFullYear();
hora = data.getHours();
hora = hora < 10 ? `0+${hora}`:`${hora}`
minutos = data.getMinutes();
minutos = minutos < 10 ? `0${minutos}`:`${minutos}`
segundo = data.getSeconds();
segundo = segundo < 10 ? `0${segundo}`:`${segundo}`
semana = data.getDay(); 
diasemana= diasemanaconversao(semana);


    document.querySelector('.diasemana').innerHTML = `<p> O dia da semana é <p><p>${diasemana},${dia} de ${mes} de ${ano},${hora}:${minutos}:${segundo}<p>`