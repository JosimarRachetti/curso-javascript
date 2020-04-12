class Cpf{
    constructor(cpf){
        this.cpf = cpf.replace(/\D+/g,'');
        this.arrayCpf = Array.from(this.cpf);
        this.arrayCpf.splice(9);
        this.digitoUm = this.converte(this.arrayCpf,10);
        this.digitoDois = this.converte(this.arrayCpf,11);
        this.valido = this.arrayCpf.join().replace(/\D+/g,'') === this.cpf;
    }

    converte(array,i){
        let Nvalor;
        const array2 = array.map(valor=>{Nvalor = Number(valor)*i;--i;return Nvalor});
        const somaArray = array2.reduce((acumu,valor)=> acumu+valor);
        const predigito = 11-(somaArray%11);
        const digito = predigito >= 10 ? 0 : predigito;
        let digi = digito.toString();
        this.arrayCpf.push(digi);
        return digi;
    }
}

const cpf1 = new Cpf("457.541.548-01");
const cpf2 = new Cpf("460.507.458.-99");

console.log(cpf1);
