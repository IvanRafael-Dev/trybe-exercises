const Author = require('../models/Author');
const Joi = require('joi');

const getAll = async () => Author.getAll();

const findById = async (id) => {
  const author = await Author.findById(id);

  // caso venha null do model
  if (!author) { // agora service comunica ao controller quando o erro acontecer
    throw {
      error: {
        code: 'notFound',
        message: `Não foi encontrado um author com o id ${id}`
      },
      status: 404,
    }
  }
  return author;
};

const isBodyValid = (firstName, middleName, lastName) => {
  const { error } = Joi.object({
    firstName: Joi.string().not().empty().required(),
    middleName: Joi.string().allow(''),
    lastName: Joi.string().not().empty().required(),
  }).validate({ firstName, middleName, lastName });
  // console.log(error);
  if (error) throw error;
}

const create = async (firstName, middleName, lastName) => {
  const isAuthor = await Author.findByName(firstName, middleName, lastName);
  isBodyValid(firstName, middleName, lastName);
  if (isAuthor) {
    throw {
      error: {
        code: 'alreadyExists',
        message: 'Já existe um autor com esse nome',
      },
    }
  }

  return Author.create(firstName, middleName, lastName);
}

module.exports = {
  getAll,
  findById,
  create,
};
