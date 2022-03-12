  //criando uma função fabrica que cria um objeto dentro do prototype
  
  function criaPessoa(nome, sobrenome){
      const prototypePessoa = {
        danca(){
            console.log(`${this.nome} está dançando`);
        },
        comer(){
            console.log(`${this.nome} está comendo`);
        },
        andar(){
            console.log(`${this.nome} está andando`);
        }
      };
      return Object.create(prototypePessoa,{
          nome:{value:nome},
          sobrenome:{value:sobrenome}
      });
}

const pe1 = criaPessoa('josimar','rachetti');
console.log(pe1);

//outro metodo de criar um objeto com metodos no prototype

const falou = {
    falou(){
        console.log(`esta objeto ${this.nome} falou`)
    }
}
const moveu = {
    moveu(){
        console.log(`esta objeto ${this.nome} moveu se`)
    }
}

function criaObjeto(nome){
    return Object.create(criaAlgo,{
       nome:{value:nome}
    });
};

const criaAlgo = {...falou,...moveu};

const cadeira = criaObjeto('cadeira');