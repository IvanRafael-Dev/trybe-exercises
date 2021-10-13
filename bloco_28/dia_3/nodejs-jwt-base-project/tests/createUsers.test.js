const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { getConnection } = require('./connectionMock');
const server = require('../api/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /api/users', () => {
  describe('quando é criado com sucesso', () => {
    let response;
    // let DBModel = new MongoMemoryServer();
    before(async () => {
      let mockConnection = await getConnection();
      sinon.stub(MongoClient, "connect").resolves(mockConnection);

      response = await chai.request(server).post('/api/users').send({
        username: 'jane',
        password: 'senha123',
      });
    });

    after(async () => {
      MongoClient.connect.restore();
      // await DBModel.stop();
    })

    it('retorna o código de status 201', () => {
      /*
            Perceba que aqui temos uma asserção
            específica para o status da `response` 😬
        */
      expect(response).to.have.status(201);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });

    it('a propriedade "message" possui o texto "Novo usuário criado com sucesso"', () => {
      expect(response.body.message).to.be.equal(
        'Novo usuário criado com sucesso'
      );
    });
  });
});
