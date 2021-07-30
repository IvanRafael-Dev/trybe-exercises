// const connection = require('./mySQLConnection');
const connection = require('./myMongodbConnection');
const { ObjectId } = require('mongodb');

// use with mysql
// const findById = async (id) => {
//   const [author] = await connection
//     .execute('SELECT * FROM authors WHERE id=?', [id]);
//   if (author.length === 0) return null;
//   return author.map(serialize)[0];
// };

// use with mongodb
const findById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(ObjectId(id))) // retorna um object

  if (!authorData) return null;

  // return authorData;
  return {
    id: authorData._id,
    first_name: authorData.firstName,
    middle_name: authorData.middleName,
    last_name: authorData.lastName,
  }
};



// use with mysql
// const create = async (firstName, middleName, lastName) => connection
//   .execute(`
//     INSERT INTO model_example.authors (first_name, middle_name, last_name)
//     VALUES (?, ?, ?)`, [firstName, middleName, lastName]);

const create = async (firstName, middleName, lastName) =>
  await connection()
    .then((db) => db.collection('authors').insertOne({firstName, middleName, lastName}));
;

const deleteAuthorById = async (id) => 
  await connection()
    .then((db) => db.collection('authors').deleteOne({ _id: ObjectId(id)}));

// // use with mysql
// const getAll = async () => {
//   const [authors] = await connection.execute('SELECT * FROM authors');
//   return authors.map(serialize);
// };

// use with mongodb
const getAll = async () => {
  return connection()
    // query no db
    .then((db) => db.collection('authors').find().toArray()
    // conteudo resposta
    .then((authors) => authors
      .map(({ _id, firstName, middleName, lastName }) => {
        return {
          id: _id,
          first_name: firstName,
          middle_name: middleName,
          last_name: lastName,
        }
      })
    )
  )
};

module.exports = {
  getAll,
  findById,
  create,
  deleteAuthorById
};