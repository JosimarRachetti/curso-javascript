//alert('Velho idiota, cala essa boca podre');//abre uma caixa de alerta na pagina 

//confirm(); // caixa de confirmação com retorno booleano true ou false

//prompt(); //Caixa de input de dados, retorna o que usuário digitar

let numero1 = prompt("digite um primerio numero:"); // prompt sempre retorna string
let numero2 = prompt('Digete um segundo numero:');
numero1 = parseInt(numero1); // converte string para numero
numero2 = parseInt(numero2);

let numero3;
numero3=numero2+numero1;

alert('A soma dos dois numeros foi'+ numero3);

document.body.innerHTML = "Olá Mundo<br>" //adiciona texto ao corpo do html 
document.body.innerHTML += 'Tudo bem com vc mundo?'//o + une o segundo texto com o primeiro