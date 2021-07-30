// const connection = require('./mySQLConnection');
const connection = require('./myMongodbConnection');
const { ObjectId } = require('mongodb');

const { getFullName, findById } = require('./Author');

const setBookInfos = (bookInfo) => {
  const { first_name, middle_name, last_name } = bookInfo;
  return {
    id: bookInfo.id,
    title: bookInfo.title,
    author_id: bookInfo.author_id,
    author: getFullName({first_name, middle_name,last_name}),
  }
};

// // use with mysql
// const getByAuthorId = async (id) => {
//   const [books] = await connection
//     .execute(`
//       select
//         b.id,
//         b.title,
//         b.author_id, 
//         a.first_name,
//         a.middle_name,
//         a.last_name
//       from books as b
//         inner join authors as a
//           on b.author_id = a.id
//       where b.author_id=?`, [id]);
//   if (books.length === 0) return null;
//   return books;
// };

const getByAuthorId = async (id) => {
  const books = await connection()
    .then((db) => db.collection('books').find({ author_id: Number(id)}).toArray());
  if (books.length === 0) return null;
  return books;
}

// // use with mysql
// const isValid = async (title,  author_id) => {
//   if (!title || typeof title !== 'string' || title.length < 3) return false;
//   if (!author_id || typeof author_id !== 'number' || !(await findById(author_id))) return false;
//   return true;
// };

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'string' || authorId.length !== 24 || !(await findById(authorId))) return false;
  return true;
};

const create = async (title, authorId) => connection()
    .then((db) => db.collection('books').insertOne({ title, authorId }));

// // use with mysql
// const create = async (title, author_id) => {
//   await connection.execute(`
//     INSERT INTO model_example.books (title, author_id)
//       VALUES (?, ?)`, [title, author_id]);  
// };

// // use with mysql
// const getAll = async () => {
//   const [books] = await connection
//     .execute(`
//       select
//         b.id,
//         b.title,
//         b.author_id, 
//         a.first_name,
//         a.middle_name,
//         a.last_name
//       from books as b
//         inner join authors as a
//           on b.author_id = a.id`);
//   return books.map(setBookInfos);
// };

const getAll = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray())
    .then((books) => books.map(({ _id, title, author_id }) => {
      return {
        id: ObjectId(_id),
        title,
        author_id
      }
    }));
}

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const book = await connection()
    .then((db) => db.collection('books').findOne(new ObjectId(id)))
  if (!book) return null;
  return book;
}

module.exports = { 
  getAll,
  getById,
  getByAuthorId,
  isValid,
  create,
};