const express = require('express');
const bodyParser = require('body-parser').json();

const Author = require('./controllers/Author');

const app = express();

app.use(bodyParser);

app.get('/authors', Author.getAll);
app.get('/authors/:id', Author.findById);
app.post('/authors/', Author.create);

app.use((err, req, res, next) => {
  res.status(err.status).json(err.error.message);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));