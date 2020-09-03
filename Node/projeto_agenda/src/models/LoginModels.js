const mongoose = require('mongoose');
const validator = require('validator');

const LoginSchema = new mongoose.Schema({
    email: { type:String,required:true},
    password: { type:String,required:true},
    nome: { type:String,required:true}
});

const LoginModel = mongoose.model('Login',LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

   async register(){
        this.validacao();
        if (this.errors.length > 0) return;

        try {
            this.user = await LoginModel.create(this.body);
        }catch (e){
            console.log(e);
        }
    }

    validacao(){
        this.cleanUp();
        //validação de campos
        if(!validator.isEmail(this.body.email)) this.errors.push("Email-invalido");
        //validação tamanho password
        if(this.body.password.length < 6) this.errors.push("Tamanho password invalido");
    }

    cleanUp(){
        //limpa objeto valores diferentes de string
        for(let key in this.body){
          if(typeof this.body[key] !== 'string'){
              this.body[key] = '';
          }
        }

        this.body = {
            email: this.body.email,
            nome: this.body.nome,
            password: this.body.password
        }

    };
}

module.exports = Login;