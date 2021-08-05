const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../../services/movieService');

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);
      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);
      expect(response).to.be.equal(false);
    });
    
  });
  
  describe('quando é inserido com sucesso', () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };
    
    // mockar a camada abaixo (model), nao podemos depender de models para os testes;
    before(() => {
      const ID_EXAMPLE = '604cb554311d68f491ba5781';
      sinon.stub(MoviesService, 'create').resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      MoviesService.create.restore();
    });
    
    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);
      expect(response).to.be.a('object');
    });
    
    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);      
      expect(response).to.have.a.property('id');
    });

  });
});