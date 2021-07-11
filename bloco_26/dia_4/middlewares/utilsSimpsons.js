const fs = require('fs').promises;

async function getSimpsons(req, res, next) {  
  try {
    await fs
      .readFile('/home/ivan/Documentos/Trybe/Trybe_Exercises/bloco_26/dia_4/simpsons.json', 'utf-8')
      .then((content) => req.simpsons = JSON.parse(content))
      .then(() => next());
  } catch (err) {
     return res.status(500).send('Arquivo invalido');
  }
}

async function setSimpsons(simpsons) {
  await fs.writeFile('./simpsons.json', JSON.stringify(simpsons))
}

module.exports = {
  getSimpsons,
  setSimpsons,
};