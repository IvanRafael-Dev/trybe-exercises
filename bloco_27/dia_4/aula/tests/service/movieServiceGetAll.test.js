const sinon = require('sinon');
const { expect } = require('chai');

const MoviesModel = require('../../models/movieModel')
const MoviesService = require('../../services/movieService');

describe('Busca todos os filmes no DB', () => {
  describe('quando não existe nenhum filme cadastrado', () => {
    before(() => {
      sinon.stub(MoviesModel, 'getAll').resolves([]);
    });

    after(() => {
      MoviesModel.getAll.restore();
    });

    it('retorna um array', async () => {
      const result = await MoviesService.getAll();
      expect(result).to.be.an('array');
    });

    it('o array é vazio', async () => {
      const result = await MoviesService.getAll();
      expect(result).to.be.empty;
    });
  });
  
  describe('quando existe pelo menos um filme cadastrado', () => {
    before(() => {
      sinon.stub(MoviesModel, 'getAll').resolves([
        {
          id: 1,
          title: 'Twister',
          directedBy: 'Some author',
          releaseYear: 2000,
        }
      ]);
    });

    after(() => {
      MoviesModel.getAll.restore();
    });

    it('retorna um array', async () => {
      const result = await MoviesService.getAll();
      expect(result).to.be.an('array');
    });

    it('o array não é vazio', async () => {
      const result = await MoviesService.getAll();
      expect(result).to.not.be.empty;
    });

    it('os itens do array sao objetos', async () => {
      const [item] = await MoviesService.getAll();
      expect(item).to.be.an('object');   
    });

    it('os items possuem as chaves "id", "title", "releaseYear" e "directedBy"', async () => {
      const [item] = await MoviesService.getAll();
      expect(item).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
    });
  });
});
