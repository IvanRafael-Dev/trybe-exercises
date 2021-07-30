const connection = require('./connection');
const { ObjectId } = require('mongodb');

// cria uma string com nome completo do Autor

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name).join(' ');
  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  }
};

// busca todos os autores do bancos do
const getAll = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) => authors
      .map(({ _id, firstName, middleName, lastName}) => 
        getNewAuthor({
          id: _id,
          firstName,
          middleName,
          lastName,
        })
      )
    );
};

/**
 Busca um ator específico, a partir do seu ID
 param {String} id ID do autor a ser recuperado
 */

const findById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(new ObjectId(id)))
  
  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  return getNewAuthor({
    id, // veio pelo parametro na req
    firstName,    
    middleName,
    lastName
  });
};

const findByName = async (firstName, middleName, lastName) => {
  const query = middleName
    ? { firstName, middleName, lastName }
    : { firstName, lastName };

  const author = await connection()
    .then((db) => db.collection('authors').findOne(query))

  if (!author) return null;

  return getNewAuthor(author);
}

// const isString = (value) => {
//   if (!value) return false;
//   return typeof value === 'string';
// };

// const isValid = (firstName, middleName, lastName ) => {
//   if (middleName && typeof middleName !== 'string') return false;
//   return isString(firstName) && isString(lastName);
// };

const create = async (firstName, middleName, lastName) =>
  connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName}))
    .then((newAuthor) => getNewAuthor({ id: newAuthor.insertedId, firstName, middleName, lastName}));
    

module.exports = {
  getAll,
  findById,
  findByName,
  // isValid,
  create
}