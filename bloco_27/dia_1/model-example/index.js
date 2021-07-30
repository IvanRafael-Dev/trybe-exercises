const express = require('express');
const app = express();
const bodyparser = require('body-parser').json();

const { checkAuthorById, validateAuthor } = require('./middlewares/authorMWs')
const { bookQueryByAuthorId, validateBook, getBookById } = require('./middlewares/bookMWs');
const Author = require('./services/Author');
const Book = require('./models/Book');

const PORT = process.env.PORT || 3000;

app.use(bodyparser);

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

app.get('/authors/:id', checkAuthorById);

app.get('/books', async (req, res) => {  
  const books = await Book.getAll();
  res.status(200).json(books);
});

app.get('/books/search', getBookById);

app.get('/books/:id', bookQueryByAuthorId);

app.post('/authors', validateAuthor);

app.post('/books', validateBook, async (req, res) => {
  const { title, author_id } = req.body;
  await Book.create(title, author_id);
  res.status(201).json({ message: 'Livro criado com sucesso.'})
});

app.delete('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.deleteAuthorById(id);
  if (!author) return res.status(404).json({ message: 'Author not found' });
  res.status(200).json({ message: 'Author deleted' })
})
app.listen(PORT, () => console.log(`Servidor aberto na porta ${PORT}`));