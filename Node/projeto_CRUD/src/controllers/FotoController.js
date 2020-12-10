import multer from 'multer';
import multerCofig from '../config/multerConfig';
import Foto from '../models/Fotos';

const upload = multer(multerCofig).single('arquivo');

class FotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      try {
        console.log(req.file);
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Foto.create({ originalname, filename, aluno_id });
        return res.json(foto);
      } catch (e) {
        console.log(e);
        return res.status(400).json({
          error: ['Aluno não existe'],
        });
      }
    });
  }
}

export default new FotoController();
