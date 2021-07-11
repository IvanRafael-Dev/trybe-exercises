const fs = require('fs').promises;

// function escreveArquivo(caminho, content) {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(caminho, content, { flag: 'wx' })
//       .then(() => resolve('Arquivo criado com sucesso'))
//       .catch((err) => reject(err));
//   });
// }

// async function showSimpsonsFamily() {
//   const family = await fs
//     .readFile('./simpsonsFamily.json', 'utf-8')
//     .then((data) => JSON.parse(data))
//     .then((content) => content
//       .map(character => `${character.id} - ${character.name}`).join('\n'))
//   return family
// }

// showSimpsonsFamily()
//   .then(resolve => console.log(resolve))
//   .catch((err) => console.error(err))

// async function findSimpson(id) {
//   const family = await fs
//     .readFile('./simpsonsFamily.json', 'utf-8')
//     .then((data) => JSON.parse(data))
//   const queryPerson = family.find((member) => member.id === id.toString())
//   if (!queryPerson) {
//     throw new Error('Id nao identificado');
//   }
//   return queryPerson;
// }

// findSimpson(11)
//   .then(resolve => console.log(resolve))
//   .catch((err) => console.error(err))

// async function filterSimpsons(...params) {
//   const simpsons = await fs
//     .readFile('./simpsonsFamily.json', 'utf-8')
//     .then((data) => JSON.parse(data))
//   const filtered = simpsons.filter((character) => character['id'].includes(...params))
//   return filtered;
// }

// filterSimpsons(1, 2, 3).then((res) => console.log(res))

// function lerArquivoECopiaPara(caminho, destino) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(caminho, 'utf-8')
//       .then((data) => {
//         escreveArquivo(destino, data)
//           .then(() => resolve('Consegui Copiar'))
//           .catch((err) => reject('Nao rolou'));
//       })
//       .catch((err) => reject(err));    
// //   })
// function lerArquivoECopiaPara(caminho, destino) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(caminho, 'utf-8')
//       .then((data) => {
//         escreveArquivo(destino, data)
//           .then(() => resolve('Consegui Copiar'))
//           .catch((err) => reject('Nao rolou'));
//       })
//       .catch((err) => reject(err));    
//   })
// }

// lerArquivoECopiaPara('./simpsonsFamily.json', './simpsons.json')//   })
//   .catch((err) => console.log(err));


// escreveArquivo('./file4.txt')
//   .then((response) => console.log(response))
//   .catch((err) => console.log(`O caminho ${err.path} ja existe`));

// function lerArquivoECopiaPara(caminho, destino) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(caminho, 'utf-8')
//       .then((data) => {
//         escreveArquivo(destino, data)
//           .then(() => resolve('Consegui Copiar'))
//           .catch((err) => reject('Nao rolou'));
//       })
//       .catch((err) => reject(err));    
//   })
// }

// lerArquivoECopiaPara('./simpsonsFamily.json', './simpsons.json')

// fs.readFile('./simpsonsFamily.json', 'utf8', (err, data) => {

// })

// const fs = require('fs').promises;

// function showSimpsons() {
  // function lerArquivoECopiaPara(caminho, destino) {
  //   return new Promise((resolve, reject) => {
  //     fs.readFile(caminho, 'utf-8')
  //       .then((data) => {
  //         escreveArquivo(destino, data)
  //           .then(() => resolve('Consegui Copiar'))
  //           .catch((err) => reject('Nao rolou'));
  //       })
  //       .catch((err) => reject(err));    
  //   })
  // }
  
  // lerArquivoECopiaPara('./simpsonsFamily.json', './simpsons.json')
// showSimpsons()
//   .then((data) => JSON.parse(data).forEach((personagem) => console.log(`${personagem.id} - ${personagem.name}`)))
//   .catch((err) => console.log(err));



// function findSimpson(findId) {
//   return new Promise((resolve, reject) => {
//     fs.readFile('./simpsonsFamily.json', 'utf-8')
//     .then((data) => {
//      const personagem = JSON.parse(data).find((personagem) => personagem.id === findId.toString());
//      if (personagem) {
//        resolve(`${personagem.id} - ${personagem.name}`)
//      } else {
//        reject('id não encontrado');
//      }
//     })
//     .catch((error) => reject(error))
//   })
// }

// findSimpson(30)
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err))

// const fs = require('fs').promises;

// function removeSimpson() {
//   return new Promise((resolve, reject) => {
//     fs.readFile('./simpsonsFamily.json', 'utf-8')
//       .then((data) => {
//         const personagens = JSON.parse(data).filter((personagem) => personagem.id !== '6' && personagem.id !== '10');
//         fs.writeFile('./simpsons.json', JSON.stringify(personagens), 'utf-8')
//           .then(() => resolve('Arquivo escrito com sucesso'))
//           .catch((err) => reject(err))
//       })
//       .catch((err) => reject(err))
//   })
// }

// removeSimpson()
//   .then((resolve) => console.log(resolve))
//   .catch((err) => console.log(err))


// const fs = require('fs').promises;

// function removeSimpson() {
//   return new Promise((resolve, reject) => {
//     fs.readFile('./simpsonsFamily.json', 'utf-8')
//       .then((data) => {
//         const personagens = JSON.parse(data).filter((personagem) => parseInt(personagem.id) <= 4);
//         fs.writeFile('./simpsons.json', JSON.stringify(personagens), 'utf-8')
//           .then(() => resolve('Arquivo escrito com sucesso'))
//           .catch((err) => reject(err))
//       })
//       .catch((err) => reject(err))
//   })
// }

// removeSimpson()
//   .then((resolve) => console.log(resolve))
//   .catch((err) => console.log(err))

// const fs = require('fs').promises;

// function addSimpson() {
//   return new Promise((resolve, reject) => {
//     fs.readFile('./simpsonsFamily.json', 'utf-8')
//       .then((data) => {
//         const nelson = JSON.parse(data).find((personagem) => personagem.name === 'Nelson Muntz')
//         fs.readFile('./simpsons.json', 'utf-8')
//           .then((data) => {
//             const family = JSON.parse(data);
//             family.push(nelson);
//             fs.writeFile('./simpsons.json', JSON.stringify(family), 'utf-8')
//               .then(() => resolve('Nelson foi adicionado'))
//               .catch((err) => reject(err))
//           })
//       })
//       .catch((err) => reject(err))
//   })
// }

// addSimpson()
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err))

//   const fs = require('fs').promises;

//   fs.unlink('./simpons.json');

// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .