const connection = require('./connection');

const createUser = async ({ username, password }) => {
  const user = await connection()
    .then((db) => db.collection('users').insertOne({ username, password }));
    
  return user.ops[0].username;
};
const findUser = async (username) =>
  connection()
    .then((db) => db.collection('users').findOne({ username }));

module.exports = {
  createUser,
  findUser,
};