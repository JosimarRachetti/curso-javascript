// setInterval executa uma função de forma continua
// de acordo com determinado tempo
n=1;
const tempo = setInterval(function teste(){
    console.log(n);
}, 1000); // a cada 1000 milesimos de segundo(1 segundo), a função teste será executada

// para determinar quando setInterval deve parar
//pode se usar a função setTimeout que executa apenas uma vez
clearInterval(tempo);
setTimeout(function para(){
  //para função setInterval
},4000);