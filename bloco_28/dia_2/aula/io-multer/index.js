require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

/* toda vez que fazemos uma requisicao de uma pagina web para um servidor existe uma politica
do browswer que diz que uma pagina web só pode fazer fazer requisicoes e solicitar recursos
para a mesma url onde ela está
isso quer dizer que se meu front end esta em localhost:3000, minha api tbm deve estar nesse endpoint
caso contrario o navegador não deixa que a requisição seja feita,
para contornar isso eh que usamos o mw CORS
O cors diz ao navegador que tais paginas podem fazer requests
*/
// app.use(
//   cors({
//     origin: '*', // `http://localhost:${PORT}`,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // metodos aceitos pelo navegador
//     allowedHeaders: ['Authorization'], // headers que aceitamos receber
//     // exposedHeaders: [''] // headers que aceitamos devolver
//   }),
// );

app.use(cors()); // desse modo o browser aceita todo tipo de requisicao 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);

app.post('/pictures', controllers.picture);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
