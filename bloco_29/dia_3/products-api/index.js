/* eslint-disable sonarjs/no-duplicate-string */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);
app.use('/users', controllers.users); // chamando como router apenas para teste
app.use('/selloffs', controllers.selloffs); // chamando como como como

app.post('/products', controllers.products.createProduct);
app.get('/products', controllers.products.getAllProducts);
app.get('/products/:id', controllers.products.getProductById);
app.put('/products/:id', controllers.products.updateProduct);
app.delete('/products/:id', controllers.products.destroyProduct);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
