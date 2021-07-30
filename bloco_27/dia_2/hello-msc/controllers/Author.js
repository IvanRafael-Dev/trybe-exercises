// camada que majoritariamente ficam os middlewares
const rescue = require('express-rescue');
const service = require('../services/Author');
// usaremos o Joi para validação de entrada de dados da request

// aqui eh o codigo que passariamos para o endpoint GET /authors do index.js
const getAll = rescue(async (req, res) => {
  const authors = await service.getAll();
  res.status(200).json(authors);
});

const findById = rescue(async (req, res) => {
  const { id } = req.params;
  const authors = await service.findById(id);
  // caso seja null a variavel author recebe um objeto com a chave 'error' vinda de services
  // if (authors.error) return res.status(404).json(authors.error)
  
  // e aqui é enviado para o fluxo (middleware) de erro
  // if (authors.error) return next(authors.error) // caso eu retorne o erro na funcao
  // caso tudo ok é retornado o author
  res.status(200).json(authors);
})

const create = rescue(async (req, res, next) => {
  const { firstName, middleName, lastName } = req.body;
  const newAuthor = await service.create(firstName, middleName, lastName);
  if (newAuthor.error) return next(newAuthor.error);
  res.status(200).json(newAuthor);
});


module.exports = {
  getAll,
  findById,
  create,
}

