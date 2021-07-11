const fs = require('fs').promises;

// // 1
// async function showSimpsons() {
//   const simpsons = await fs
//     .readFile('./simpsonsFamily.json', 'utf8')
//     .then((data) => JSON.parse(data))
//     .then((characters) => characters
//       .map(({ id, name }) => `${id} - ${name}`))
//     .then((family) => family.
//       forEach((member) => console.log(member)))
//   return simpsons;
// }

// showSimpsons();

// // 2
// async function findSimpson(id) {
//   const character = await fs
//     .readFile('./simpsonsFamily.json', 'utf-8')
//     .then((data) => JSON.parse(data))
//     .then((content) => content
//       .find((char) => char.id === id.toString()))
//   if (!character) throw new Error('Id não encontrado');

//   return character;
// }

// findSimpson(4)
//   .then(({id, name}) => console.log(`${id} - ${name}`))
//   .catch(error => console.error(error))

// // 3
// async function removeSimpons(...ids) {
//   const filtered = await fs.readFile('./simpsonsFamily.json', 'utf-8')
//     .then((data) => JSON.parse(data))
//     .then((content) => content
//       .filter((char) => !ids.includes(parseInt(char.id))))
//   await fs.writeFile('./simpsons.json', JSON.stringify(filtered), 'utf-8', { flag: 'wx'})
// }

// removeSimpons(6, 10)


//4

// async function newFamily(...id) {
//   const filtered = await fs
//     .readFile('./simpsons.json', 'utf-8')
//     .then((data) => JSON.parse(data))
//     .then((content) => content
//       .filter((char) => id.toString().includes(char.id)));
//   await fs.writeFile('./simpsonFamily.json', JSON.stringify(filtered), 'utf-8')
//     .then(() => console.log('O Arquivo foi escrito com sucesso'))
//     .catch((err) => console.log(err))
// }

// newFamily(1, 2, 3, 4)

   // const fs = require('fs').promises;

  // fs.writeFile('./teste.txt', 'teste').then(() => console.log('Arquivo escrito com sucesso'))

//5

// async function addCharacter() {
//   const nelson = await fs
//     .readFile('./simpsonsFamily.json', 'utf-8')
//     .then((data) => JSON.parse(data)
//       .find((el) => el.name === 'Nelson Muntz'));
//   const family = await fs
//     .readFile('./simpsonFamily.json', 'utf-8')
//     .then((data) => JSON.parse(data));
//   family.push(nelson);
//   await fs.writeFile('./simpsonFamily.json', JSON.stringify(family), 'utf-8')
//     .then(() => console.log('Nelson é da família'))
//     .catch((err) => console.log(err));
// }

// addCharacter()

//6

async function replaceNelson() {
  const familia = await fs
    .readFile('./simpsonFamily.json', 'utf-8')
    .then((data) => JSON.parse(data)
      .filter((familiaSemNelson) => familiaSemNelson.id !== '8'))
  const novaFamilia = familia.concat([{ id: '8', name: 'Maggie Simpson'}]);
  await fs.
    writeFile('./simpsonFamily.json', JSON.stringify(novaFamilia), 'utf-8')
      .then(() => console.log('Maggie nasceu!'))
}

replaceNelson()

// 1 - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
// 2 - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
// 3 - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
// 4 - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
// 5 - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
// 6 - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .