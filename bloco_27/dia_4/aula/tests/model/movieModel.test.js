const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { expect } = require('chai');
const MoviesModel = require('../../models/movieModel');
/*
  Como ainda não temos a implementação, vamos fixar
  um objeto simulando os métodos que iremos desenvolver,
  porém, eles não terão nenhum comportamento
*/

// const MoviesModel = {
//   create: async () => {},
// };

/**
  DB em memória com o mongoMemoryServer
  seta URL com getUri 
  e faz o mock da connection antes de todos os testes
 */
before(async () => {
  const DBSERVER = new MongoMemoryServer();
  const URLMOCK = await DBSERVER.getUri(); // getUri retorna uma promise
  const mockConnection = await MongoClient.connect(
    URLMOCK, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

  sinon.stub(MongoClient, "connect").resolves(mockConnection);
});

after(() => {
  MongoClient.connect.restore();
});

describe('Insere um novo filme no DB', () => {
  const moviePayload = {
    title: 'Bastardos Inglórios',
    directedBy: 'Quentin Tarantino',
    releaseYear: 2009,
  };

  describe('quando é inserido com sucesso', () => {
    it('retorna um Objeto', async () => {
      const result = await MoviesModel.create(moviePayload);
      expect(result).to.be.an('object');
    });
    it('possui a propriedade "id" do novo filme inserido', async () => {
      const result = await MoviesModel.create(moviePayload);
      expect(result).to.have.a.property('id')
    });
  });
});