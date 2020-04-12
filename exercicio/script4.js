const relogio = document.querySelector('#relogio');
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const fim = document.querySelector('#zerar');

let relo = {seg:00,
min:00,
hor:00}

iniciar.addEventListener('click', function(event){
    return tempo = setInterval(function teste(){
        relogio.style.color="black";
        relo.seg+=1;
        if(relo.seg>59){relo.seg=0; relo.min+=1}
        if(relo.min>59){relo.min=0;relo.hor+=1}
        relogio.innerHTML = `${relo.hor}:${relo.min}:${relo.seg}`; 
        }, 1000);
    
});

pausar.addEventListener('click', function(event){
        console.log('funciona');
        clearInterval(tempo);
        relogio.innerHTML = `${relo.hor}:${relo.min}:${relo.seg}`;
        relogio.style.color = "red"; 
    
});

fim.addEventListener('click', function(event){
  
    clearInterval(tempo);
    relo.seg=0;
    relo.min=0;
    relo.hor=0;
    relogio.innerHTML = `${relo.hor}:${relo.min}:${relo.seg}`; 
    relogio.style.color="black";
     
});
