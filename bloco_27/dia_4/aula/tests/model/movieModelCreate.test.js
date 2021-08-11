const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { getConnection } = require('../mockConnection');

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


describe('Insere um novo filme no DB', () => {
  const moviePayload = {
    title: 'Bastardos Inglórios',
    directedBy: 'Quentin Tarantino',
    releaseYear: 2009,
  };

  let mockConnection;

  before(async () => {
    mockConnection = await getConnection();
    sinon.stub(MongoClient, "connect").resolves(mockConnection);
  });

  after(async () => {
    await mockConnection.db('model_example_tests').collection('movies').deleteMany({});
    MongoClient.connect.restore();
  });
  
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