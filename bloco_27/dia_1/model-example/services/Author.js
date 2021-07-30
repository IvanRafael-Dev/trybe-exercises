const Author = require('../models/Author');
const { ObjectId } = require('mongodb');

const getFullName = ({ first_name, middle_name, last_name }) => {
  return [first_name, middle_name, last_name].filter((name) => name).join(' ');
};

const serialize = (authorsObject) => {
  const { first_name, middle_name, last_name } = authorsObject;
  return {
    id: authorsObject.id,
    firstName: authorsObject.first_name,
    middleName: authorsObject.middle_name,
    lastName: authorsObject.last_name,
    nationality: authorsObject.nationality,
    fullName: getFullName(authorsObject),
    
  }
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;
  return true;
}

// find
const findById = async (id) => {
  const author = await Author.findById(id);
  if (!author) return null;
  return serialize(author);
};

// create
const create = async (firstName, middleName, lastName) => {
  const isAuthorValid = isValid(firstName, middleName, lastName);
  if (!isAuthorValid) return false;
  const newAuthor = await Author.create(firstName, middleName, lastName);
  return {
    id: newAuthor.insertedId,
    firstName,
    middleName,
    lastName,
  }
};

const deleteAuthorById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const selectedAuthor = await Author.findById(id);
  if (!selectedAuthor) return null;
  await Author.deleteAuthorById(selectedAuthor.id);
  return true;
}

// get all
const getAll = async () => {
  const authors = await Author.getAll();
  return authors.map(serialize);
};

module.exports = {
  getAll,
  findById,
  create,
  deleteAuthorById
}