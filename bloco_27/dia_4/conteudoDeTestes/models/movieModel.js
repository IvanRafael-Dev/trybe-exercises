const connection = require('./connection');

const create = async ({ name, directedBy, releaseYear }) => {
  const moviesCollection = await connection()
    .then((db) => db.collection('movies'));
  const { insertedId: id } = await moviesCollection
    .insertOne({ name, directedBy, releaseYear });
  return { id }
};

module.exports = {
  create,
};
