function Funciona(){
    const formu = document.querySelector('.formulario');
    
   function recebeEvento(evento){
       evento.preventDefault();
            
       const peso =Number(document.querySelector('#teste-input-1').value);
       const altura =Number(document.querySelector('#teste-input-2').value);
       if(peso && altura){
       const resultado = peso/(altura*altura);
       alert('Efetuando calculo');
       document.querySelector('#dados').innerHTML = `<p style="background-color: rgb(0, 255, 42);">${resultado.toFixed(2)}</p>`;}
       else{
           if(peso){
            document.querySelector('#dados').innerHTML = `<p style="background-color: rgb(209, 58, 58);">FALTA ALTURA</p>`;
           }else{
            document.querySelector('#dados').innerHTML = `<p style="background-color: rgb(209, 58, 58);">FALTA PESO</p>`;
            
           }
       }
    }
    formu.addEventListener('submit',recebeEvento);
}

Funciona();
    