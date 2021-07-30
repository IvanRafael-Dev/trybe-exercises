const fs = require('fs').promises;
const path = require('path');
const multer = require('multer');

// const upload = require('../middlewares/upload');

// com diskStorage
// const storage = multer.diskStorage({
//   destination: path.join(__dirname, '..', 'uploads'),
//   filename: (req, file, callback) => {
//     /** a validacap aqui nao é ideal 
//      * a nao ser que precisemos do nome do usuario para criacao
//      * do nome do arquivo 
//      */
//     // const { username, caption } = req.body;
//     // if (!username || !caption) return callback(new Error('Missing username or caption'), null);
//     callback(null, file.originalname);    
//   },
// });

// com memoryStorage
const storage = multer.memoryStorage();

const upload = multer({ storage });

const uploadPicture = [
  upload.single('file'),

  async (req, res) => { // lembrar do async caso use fs.rm()
    const { username, caption } = req.body;
    // const { file } = req;

   /* caso fosse usado o arquivo upload vindo de upload.js
    a verificacao ficaria aqui,  e teriamos que apagar o arquivo
    logo apos a verificacao */

    // com diskStorage
    // if (!username || !caption) {
    //   // caso usuario nao informe dados o arquivo eh apagado
    //   await fs.rm(file.path);
    //   return res.status(422).json({ message: 'Username and caption are required' });
    // }

    // com memoryStorage
    if (!username || !caption) {
      return res.status(422).json({ message: 'Username or caption are missing' });
    }
    
    const { file: { buffer, ...file } } = req;
    const imagePath = path.join(__dirname, '..', 'uploads', file.originalname);
    await fs.writeFile(imagePath, buffer);

    return res.status(200).json({
      message: 'Upload realizado com sucesso',
      picture: {
        username,
        caption,
        file,
      },
    });
  },
  /**
   * é possível tbm tratar erros especificos de uma rota
   * o que desafoga o middleware de erro e previne a
   * encadeação de muitos if else
   */
  // (err, req, res, next) => {
  //   if (err.code === 'invalid_user') {
  //     return next({ status: 401, message: 'Usuário não existe' });
  //   }
  // },
];

module.exports = uploadPicture;
