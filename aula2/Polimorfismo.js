function Conta(Agencia,conta,saldo){
this.Agencia=Agencia;
this.conta = conta;
this.saldo=saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log("Sem saldo");
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor){
    this.saldo+=valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function(){
    console.log(`Agencia: ${this.Agencia} / Conta: ${this.conta} - Saldo: ${this.saldo}`);   
};

const contaUm = new Conta(6989,5453,1000);
contaUm.verSaldo();
contaUm.depositar(500);
contaUm.sacar(2000);