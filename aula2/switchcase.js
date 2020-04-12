function diasemana(diasemana){
 switch(diasemana){
case 0:
    return 'DOMINGO'
    break;
case 1:
    return  'SEGUNDA'
    break;
case 2:
    return 'TERÇA'
    break;
case 3:
    return 'QUARTA';
    break;
case 4:
    return 'QUINTA'
    break;
case 5:
    return 'SEXTA'
    break;
case 6:
    return 'SABADO'
    break;
default:
    return 'NAO VALIDO'

 }

}

dia = new Date().getDay();
console.log(dia);
console.log(diasemana(dia));

