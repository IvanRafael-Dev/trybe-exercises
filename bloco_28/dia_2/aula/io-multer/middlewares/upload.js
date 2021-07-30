const multer = require('multer');
const path = require('path');

const upload = multer({ dest: path.join(__dirname, '..', 'uploads/') });
/* SOs diferentes utilizam separadores de pasta diferentes (\ no caso do windows) (/ no caso do linux)
  entao não podemos concatenar o endereco com / como ${__dirname}/../uploads
*/

module.exports = upload;