//classes são parecidas com funções construtoras

class Musica{
    constructor(musica,cantor,album){
        this.musica = musica; 
        this.cantor = cantor;
        this.album = album;
    }

    tocar(){
        console.log(`${this.musica} está tocando`);
    }

    parar(){
        console.log(`${this.musica} parou de tocar`);
    }

    repetir(){
        console.log(`${this.musica} vai ser repetida`);
    }
}


const m1 = new Musica('Born this way','lady gaga','Born this way');
const m2 = new Musica('pais e filhos','legião urbana','quatro estações');

//GETTING SETTER

let on = false;
const clockProce= Symbol(); //o symbol irá proteger o valor de ser alterado de fora da classe
class Computer{
    constructor(marca,processador,ram){
        this.marca=marca;
        this.processador = processador;
        this.ram =  ram;
        this[clockProce] = 0;
    }

    get _clockProce(){
        return this[clockProce]
    }
    
    set _clockProce(valor){
        if(typeof valor !== 'number') return;
        if(valor > 600) return;
        this[clockProce] = valor;
    }

    ligar(){
        if(!on){
        console.log("você ligou o computer");
        on= true;}
    }
    processar(){
        if(this[clockProce] < 600){
            this[clockProce]++;
        }
    }
    desligar(){
        on=false;
        console.log("você ligou desligou o computador");
    }


}

//SYMBOL DADO PRIMITIVO QUE SERVE PARA CRIAR UMA CHAVE PRIVADA
//COM UMA CHAVE PRIVADA SEU VALOR FICA DIFÍCIL SER MANIPULADO POR FORA DA CLASSE
//para alterar o valor de um chave com Symbol é necessário criar um get

const notebookOne = new Computer('Vaio','i5','8G');
for(i=0;i<700;i++){
    notebookOne.processar();
}

notebookOne._clockProce = 800;
console.log(notebookOne.clockProce);
console.log(notebookOne);

//HERANÇAS DE CLASSES

class livro{
    constructor(nome,autor,disponivel){
        this.nome =  nome;
        this.autor = autor;
        this.disponivel = disponivel;}

        disponibilidade(){
            if(this.disponivel){console.log("Livro disponível"); return;}
            return console.log("Não disponível");
        }
}

class SessaoBiblioteca extends livro{ //com extends os atribudos da classe pai podem ser chamados na classe filho
    constructor(nome,autor,disponivel,seccao,prateleira){
        super(nome,autor,disponivel); // o super é necessario para 'puxar' os atributos da classe pai
        this.seccao = seccao;
        this.prateleira = prateleira;
    }
}

const livroDois = new SessaoBiblioteca("chamado do cuco","J.k Rowling",true,"A23",10);
console.log(livroDois);

const livroUm = new livro("E não sobrou nenhum","Agatha Cristie",false);
livroUm.disponibilidade();