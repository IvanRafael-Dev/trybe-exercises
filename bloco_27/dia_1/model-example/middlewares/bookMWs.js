const Book = require('../models/Book');

async function bookQueryByAuthorId(req, res, _next) {
  const { id } = req.params;
  const booksByAuthor = await Book.getByAuthorId(id);
  if (booksByAuthor) return res.status(200).json(booksByAuthor);
  return res.status(404).json({ message: 'Book not found' });
}

async function getBookById(req, res, _next) {
  const { id } = req.query;
  const book = await Book.getById(id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  return res.status(200).json(book);
}

async function validateBook(req, res, next) {
  const { title, author_id } = req.body;
  if (!await Book.isValid(title, author_id)) {
    return res.status(400).json({ message: 'dados inválidos'})
  }
  next();
}

module.exports = { 
  bookQueryByAuthorId,
  validateBook,
  getBookById,
};