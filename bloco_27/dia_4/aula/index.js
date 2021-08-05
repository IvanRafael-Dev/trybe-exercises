const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const MovieController = require('./controllers/movieController');
const PORT = 8080;

app.use(bodyParser.json());

app.post('/movies', MovieController.create)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))