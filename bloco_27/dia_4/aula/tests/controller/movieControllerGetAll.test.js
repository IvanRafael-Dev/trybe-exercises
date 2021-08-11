const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../../services/movieService');
const MovieController = require('../../controllers/movieController');

describe('Obtem todos os filmes do DB', () => {
  // testa como a aplicacao recebe os dados e como devolve os dados atravez de uma req e uma res;
  describe('quando não existem filmes do banco de dados', () => {
    const request = {};
    const response = {};

    before(() => {
      sinon.stub(MoviesService, 'getAll').resolves([]);

      response.body = {};

      response.status = sinon.stub() 
        .returns(response); // cria uma funcao que retorna a response
      response.json = sinon.stub()
        .returns(response); 
    });

    after(() => {
      MoviesService.getAll.restore();
    });

    it('retorna o status HTTP 200', async () => {
      await MovieController.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('retorna um array em formato JSON', async () => {
      await MovieController.getAll(request, response);
      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });
}); 