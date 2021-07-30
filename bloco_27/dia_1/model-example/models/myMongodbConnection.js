const { MongoClient } = require('mongodb');

// url padrao mongodb
const MONGO_URL = 'mongodb://127.0.0.1:27017'; 
// options do connect
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

// const connection = async () => {
//   return MongoClient.connect(MONGO_URL, options) // promise
//     .then((conn) => {
//       console.log('Mongo Accessed')
//       return conn.db('model_example')
//     })
//     .catch((err) => {
//       console.error(err);
//       process.exit();
//     });
// }

// outro metodo

let db = null;

const connection = () => {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_URL, options)
      .then((conn) => {
        db = conn.db('model_example');
        return db;
      })
      .catch((err) => {
        console.error(err);
        process.exit();
      });
};

module.exports = connection;
