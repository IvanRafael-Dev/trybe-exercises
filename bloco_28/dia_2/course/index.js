require('dotenv').config()
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser')

const app = express();
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  },
})
const upload = multer({ storage });

const PORT = process.env.PORT || 8080;

const ping = require('./controllers/ping');
const uploaded = require('./controllers/uploaded')

app.use(bodyParser.json())

app.get('/ping', ping);
app.post('/upload', upload.single('arquivo'), uploaded);

app.listen(PORT, () => console.log(`Servidor aberto na porta ${PORT}`));

