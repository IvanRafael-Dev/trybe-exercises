const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const moviesCollection = await connection()
    .then((db) => db.collection('movies'));

  const { insertedId: id } = await moviesCollection
    .insertOne({ title, directedBy, releaseYear });

  return {
    id,
  };
};

const getAll = async () => connection()
    .then((db) => db.collection('movies'))
    .then((collection) => collection.find().toArray());

module.exports = {
  create,
  getAll,
};
