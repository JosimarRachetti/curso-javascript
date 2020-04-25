//Fetch retorna uma Promise direto


const request = obj =>{
    const xhr = new XMLHttpRequest(); //XMLhttpRequest serve para requisitar algo na internet seja um api ou um documento
    //apostar chamar open a sequencia: é um verbo no caso GET q irá buscar algo, A URL ou Obje, E true se for assincrono e false se for sincrono
    xhr.open(obj.method, obj.url, true);
    xhr.send();
    
    xhr.addEventListener('load',()=>{
        if(xhr.status >= 200 && xhr.status < 300){
            obj.sucesso(xhr.responseText);
        }else{
            obj.error(xhr.statusText);
        }
    });
    
};

document.addEventListener('click',e=>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();
      if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el){
   try{
    const href = el.getAttribute('href');
    const response = await fetch(href);
    if(response.status !== 200) throw new Error('ERRO 404!');
    const html = await response.text();
    carregaResultado(html);}
    catch(e){
        console.log(e)
    }
}
/* 
FETCH SEM  AWAIT 
function carregaPagina(el){
    const href = el.getAttribute('href');

    fetch(href).
    then(response => {
        if(response.status !== 200) throw new Error('ERRO 404!');
        return response.text();
    })
    .then(html=>carregaResultado(html))
    .catch(e=> console.log(e))
} */

function carregaResultado(resposta){
    
    const resultado = document.querySelector('.divresposta');
    resultado.innerHTML = resposta;
}


