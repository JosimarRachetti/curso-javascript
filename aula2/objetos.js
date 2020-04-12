//criando um objeto
const pessoa = {
    nome:'Josimar',
    sobrenome:'Rachetti',
    idade:'23',
    rg:'448778191',
    falar:function(){console.log(this.nome)}
};
//duas foras de acessar informaçãoes do objeto
console.log(pessoa['nome']);
console.log(pessoa.sobrenome);
//outra forma de criar objetos
const pessoa1 = new Object();
pessoa1.nome = 'Gislene';
pessoa1.sobrenome = 'Rachetti';
pessoa1.idade = 50;
pessoa1.getDataNascimento = function (){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

//metodos são funções que são criadas dentro de objetos
pessoa.falar()
console.log(pessoa1.getDataNascimento());

//função de construção de objeto

function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome= sobrenome;
    Object.freeze(this); //esse congela o objeto não permitindo alteralo posterior de criar
}
const p1 = new Pessoa('Iris','Neves');
console.log(p1);

//defineProperty - defineProperties
//altera as propriedades do produto 
function Produto(nome,preco,etiqueta){
    this.nome = nome;
    this.preco=preco;
    Object.defineProperty(this,'etiqueta',{
        enumerable: true, //mostra o valor da chave
        value: etiqueta, //atribui um valor para chave
        writable: true, //permite ou nao alterar o valor da chave
        configurable: true //permite ou nao mudar as configuração da chave
    });
    
    // objectProperties defini as configurações para cada chave do objeto
    //faz quase a mesma coisa que defineProperty porem define properties é apenas um
    Object.defineProperties(this,{
        nome:{
        enumerable: true, //mostra o valor da chave
        value: nome, //atribui um valor para chave
        writable: true, //permite ou nao alterar o valor da chave
        configurable: true //permite ou nao mudar as configuração da chave
        },
        preco:{
        enumerable: true, //mostra o valor da chave
        value: preco, //atribui um valor para chave
        writable: true, //permite ou nao alterar o valor da chave
        configurable: true //permite ou nao mudar as configuração da chave
        }
    });
}

const pro1 = new Produto('telefone',1500,08023);
console.log(pro1);
console.log(Object.keys(pro1));

//getter e setters
//fazer um metodo do objeto e simular que são propriedades
function Carro(modelo, ano, placa){
    this.modelo = modelo;
    this.ano = ano;

    Object.defineProperty(this,'placa',{
        enumerable:true,
        configurable: true,
        get: function(){ //irá permitir que o usuario envie valores para objeto placa
            return placa;
        },
        set: function(valor){ //permite a 'mudança' do valor do objeto
            if (typeof valor !== 'number'){
                console.log('tipo errado');
                return;
            }

            return placa = valor;
        }
    });
}
 
const carro1 =new Carro('fiat',2015,233.333);
console.log(carro1.placa);
carro1.placa = 457.547; //enviando valor para getter e setter
console.log(carro1.placa);