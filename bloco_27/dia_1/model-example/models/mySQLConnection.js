const mysql = require('mysql2/promise');
 
const connection = mysql.createPool({
  host: 'localhost',
  user: 'ivan',
  password: 'Tryber9!',
  database: 'model_example',
});

module.exports = connection;