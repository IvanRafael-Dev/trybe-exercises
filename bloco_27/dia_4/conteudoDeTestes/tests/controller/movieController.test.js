const sinon = require('sinon');
const { expect } = require('chai')

/* Essa camada recebe as requisições dos clientes, preparando o input e o output 
   da pessoa usuária de acordo com sua comunicação com a camada de Service .
   Dessa forma, nos testes devemos contemplar qual a resposta para o cliente
   apropriado em cada cenário, qual o status e o body em cada resposta
*/

const MoviesController = {
  create: async () => {},
}


describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', () => {
    const request = {};
    const response = {};

    before(() => {
      request.body = {};
      response.status = sinon.stub().resolves(response)
      response.send = sinon.stub().resolves();
    });

    it('retorna o código de erro 400 - Bad Request', async () => {
      await MoviesController.create(request, response);
      expect(response.status.calledWith(400)).to.be.equal(true);      
    });

    it('retorna a mensagem "dados inválidos', async () => {
      await MoviesController.create(request, response);
      expect(response.send.calledWith('dados inválidos').to.be.equal(true));
    });
  });
    
  describe('quando o payload informado é válido', async () => {
    const request = {};
    const response = {};

    before(() => {
      request.body = {
        name: 'Interestellar',
        directedBy: 'Christopher Nolan',
        year: 2015,
      };
      response.status = sinon.stub().resolves(response);
      response.send = sinon.stub().resolves();
    })

    it('retorna o status 201 - Created', async () => {
      await MoviesController.create(request, response);
      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('retorna mensagem "Filme criado com sucesso"', async () => {
      await MoviesController.create(request, response);
      expect(response.status.calledWith('Filme criado com sucesso')).to.be.equal(true);
    });
  });
});
