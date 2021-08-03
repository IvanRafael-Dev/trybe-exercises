const { expect } = require('chai');
/*
  Como ainda não temos a implementação, vamos fixar
  um objeto simulando os métodos que iremos desenvolver,
  porém, eles não terão nenhum comportamento
*/

const MoviesModel = {
  create: async () => {},
};

describe('Insere um novo filme no DB', () => {
  const moviePayload = {
    name: 'Bastardos Inglórios',
    directedBy: 'Quentin Tarantino',
    releaseYear: 2009,
  }
  describe('quando é inserido com sucesso', () => {
    it('retorna um Objeto', async () => {
      const result = await MoviesModel.create(moviePayload);
      expect(result).to.be.an('object');
    });
    it('o possui a propriedade "id" do novo filme inserido', async () => {
      const result = await MoviesModel.create(moviePayload);
      expect(result).to.have.a.property('id')
    });
  });
});