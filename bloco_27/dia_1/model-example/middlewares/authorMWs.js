const Author = require('../services/Author');

async function checkAuthorById (req, res, _next) {
  const { id } = req.params;
  const authors = await Author.findById(id);
  if (!authors)
    return res
      .status(404)
      .json({ message: 'Author not found' });
  return res.status(200).json(authors);
};

const validateAuthor = async (req, res, next) => {
  const { first_name, middle_name, last_name } = req.body;
  const newAuthor = await Author.create(first_name, middle_name, last_name);
  if (!newAuthor) {
    return res.status(400).json({
      message: "Dados inválidos",
    });
  }
  return res.status(201).json(newAuthor);
};

module.exports = {
  checkAuthorById,
  validateAuthor,
};
