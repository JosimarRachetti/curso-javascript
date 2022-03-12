class Personagem{
    constructor(nome){
        this.nome = nome;
        this.level = 1;
    }

    sobeLvl(){
        this.level +=2;
    }

    perdeLvl(){
        this.level-=2;
    }
    
    static personagemBonus(){ //Metodo estatico não necessitada de instância para ser chamado
        console.log('personagem ganhou bonus');
    }
}

const persoUm = new Personagem("Obunto");
persoUm.sobeLvl(); //exemplo de metodo instanciado que necessitada de objeto para ser chamado
Personagem.personagemBonus(); //metodo estático sendo chamado pela class e nao por objeto instanciado