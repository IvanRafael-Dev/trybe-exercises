const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const controller = require('./controllers/movieController');
const PORT = 8080;

app.use(bodyParser.json());

app.post('/movies', controller.create)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))