const sinon = require('sinon');
const { expect } = require('chai');
const MovieModel = require('../../models/movieModel');

describe('Busca todos os filmes do DB', () => { // qual parte do codigo vou testar?
  // arrange // act // assert  
  describe('quando não existe nenhum filme cadastrado', () => { // caso de uso

    it('ele retorna um array', async () => { // o que eu quero
      const result = await MovieModel.getAll();
      expect(result).to.be.an('array')
    });

    it('o array é vazio', async () => {
      const result = await MovieModel.getAll();
      expect(result).to.be.empty; 
    });
  });

  describe('Quando existe pelo menos um filme cadastrado', () => {
    
    it('retorna um array', async () => {
      const result = await MovieModel.getAll();
      expect(result).to.be.an('array');
    });

    it('o array não é vazio', async () => {
      const result = await MovieModel.getAll();
      expect(result).to.not.be.empty;
    });

    it('o array possui itens do tipo Object', async () => {
      const [ item ] = await MovieModel.getAll();
      expect(item).to.be.an('object');
    });

    it('os objetos do array possuem as keys, "id", "title", "releaseYear", "directedBy" ', async () => {
      const [ item ] = await MovieModel.getAll();
      expect(item).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
    });
    
  });
});

