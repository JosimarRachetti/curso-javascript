const mongoose = require('mongoose');

const UploadSchema = new mongoose.Schema({
    idUser : {type : String, required :true},
    foto : {type : Buffer }
});

const UploadModel = mongoose.model('Upload',UploadSchema);

class UploadFile {
    constructor(id, foto) {
        this.id = id;
        this.foto = foto;
        this.imagem = null;
    }

    async uploadFoto(){
        this.body = {
            idUser: this.id,
            foto: this.foto
        }

        this.uplo = await UploadModel.create(this.body);

    }

    async findFoto() {
        this.imagem = await UploadModel.findOne({idUser: this.id});
    }
}

module.exports = UploadFile;