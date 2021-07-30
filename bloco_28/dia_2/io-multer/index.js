require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();
/* Cria uma instância do`multer`configurada. O`multer`recebe um objeto que,
   nesse caso, contém o destino do arquivo enviado. */

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });
const uploadToEnvios = multer({ dest: 'envios' });

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Definindo nossa pasta pública */
/* `app.use` com apenas um parâmetro quer dizer que
   queremos aplicar esse middleware a todas as rotas, com qualquer método */
/* __dirname + '/uploads' é o caminho da pasta que queremos expor publicamente */
/* Isso quer dizer que, sempre que receber uma request, o express vai primeiro
   verificar se o caminho da request é o nome de um arquivo que existe em `uploads`.
   Se for, o express envia o conteúdo desse arquivo e encerra a response.
   Caso contrário, ele chama `next` e permite que os demais endpoints funcionem */
app.use(express.static(`${__dirname}/uploads`));

app.get('/ping', controllers.ping);

app.get('/user', (req, res) => {
  const { ID } = req.query;
  res.status(200).json({ ID: ID || 'nao informado' });
});

app.get('/show/:ID', (req, res) => {
  const { ID } = req.params;
  res.status(200).json({ ID: ID || 'nao informado' });
});

app.post('/artist', (req, res) => {
  const { firstName, lastName } = req.body;
  res.status(200).json({ fullName: `${firstName} ${lastName}` });
});

app.post('/files/upload', upload.single('file'), (req, res) => {
  res.status(200).json({ body: req.body, file: req.file });
});

app.use(express.static(`${__dirname}/envios`));

app.post('/envios', uploadToEnvios.single('file'), (req, res) => {
  res.status(200).json({ body: req.body, file: req.file });
});

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
