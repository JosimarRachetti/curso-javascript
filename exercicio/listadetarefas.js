const inputTarefa = document.querySelector('.nova-tarefa');
const botaoAddTarefa = document.querySelector('.botao-nova-tarefa');
const tarefas = document.querySelector('.tarefas');

function criarLi(){
    const li=document.createElement('li');
    return li;
}

function criaBotaoApagar(li){
    li.innerText+=' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class','btaapagar'); 
    li.appendChild(botaoApagar);
}
function criaTarefa(texto){
    const li = criarLi();
    li.innerText = texto;
    tarefas.appendChild(li);
    criaBotaoApagar(li);
    salvarTarefas();
}

inputTarefa.addEventListener('keypress',function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
        limpaInput();
    }
});

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

botaoAddTarefa.addEventListener('click',function(e){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click',function(e){
    const el = e.target;
    if(el.classList.contains('btaapagar')){
        el.parentElement.remove(); //remove o pai do elemento que esta selecionado
        salvarTarefas();
    }
});

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar','').trim();
        listaDeTarefas.push(tarefaTexto);
        console.log(listaDeTarefas);
    }

const tarefasJSON = JSON.stringify(listaDeTarefas);
localStorage.setItem('tarefas',tarefasJSON);
};

function retornaTarefas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}

retornaTarefas();