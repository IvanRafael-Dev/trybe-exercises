const express = require('express');
const rescue = require('express-rescue')
const fs = require('fs').promises;
const bodyparser = require('body-parser');
const verifyAge = require('./middlewares/verifyAge');
const { getSimpsons, setSimpsons } = require('./middlewares/utilsSimpsons');
const authorize = require('./middlewares/authMW');
const tokenGenerator = require('./tokenGenerate')

const app = express();
app.use(bodyparser.json());
app.use('/simpsons', getSimpsons);

app.get('/ping', authorize, (req, res) => {
  res.status(200).json({
    message: "pong"
  })
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({
    message: `Hello, ${name}`
  })
});

app.use('/greetings', verifyAge);

app.post('/greetings', (req, res) => {
  const { name } = req.body;
  res.status(200).json({
    message: `Hello, ${name}!`
  })
});

app.put('/users/:name/:age',  (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({
    message: `Seu nome é ${name} e vc tem ${age} anos de idade.`
  })
});

app.get('/simpsons', (req, res) => {
  fs
    .readFile('./simpsons.json', 'utf-8')
    // .then((content) => JSON.parse(content))
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(500).send(`ERROR: Não foi possivel encontrar o arquivo ${err.path}`))
});

// app.get('/simpsons', async (req, res) => {
//   try {
//     const simpsons = await fs.readFile('./simpson.json', 'utf-8');
//     res.status(200).send(simpsons);
//   } catch (err) {
//     res.status(500).send(`ERROR: Não foi possivel encontrar o arquivo ${err.path}`)
//   }
// })

app.get('/simpsons/:id', (req, res) => { 
  const { id } = req.params;
  const char = req.simpsons.find((simpson) => simpson.id === id);
  if (char) return res.status(200).send(char);
  res.status(404).json({ message: "Simpson not found"})
});

app.post('/simpsons', (req, res) => {
  const { id, name } = req.body;  
  const isSimpson = req.simpsons.find((simpson) => simpson.id === id)
  if (isSimpson) return res.status(409).json({ message: 'id already exists' });
  req.simpsons.push({ id, name });
  setSimpsons(req.simpsons);

  res.status(204).end();
});

function validateInfos(req, res, next) {
  const { email, password, firstName, phone } = req.body;
  if (!email || !password || !firstName || !phone) return res.status(401).json({
    message: "missing fields"
  });
  next();
}

app.post('/signup', validateInfos, (req, res) => {
  const token =  tokenGenerator();
  res.status(200).json({
    token
  })
});


app.get('/error/:arquivo',
  rescue(async (req, res) => {
      const { arquivo } = req.params;
      const file = await fs.readFile(`${arquivo}`, 'utf-8');
      res.status(200).json({ content: file });
  })
  // (err,  req, res, next) => {
  //   console.log(err);
  //   // const meuErro = new Error(err.message)
  //   // meuErro.statusCode = 420;
  //   err.name = 'Leitura de Arquivo';
  //   // next(meuErro);
  //   err.notFound = req.params.arquivo;
  //   // err.name = 'Bob';
  //   next(err);
  // }
);

app.use((err, req, res, next) => {
  res.status(500).json({ msg: err.message, error: err });
})

app.listen(3000, () => {
  console.log('Servidor aberto na porta 3000');
})