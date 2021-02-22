const { getUserName, findUserById } = require('./exercise-2e3');

describe('Testes dos exercicios 2 e 3', () => {
  describe('exercicio 2 usando sintaxe de promise', () => {
    it('verifica sé é encontrado o nome Mark', () => {
      expect.assertions(1);
      return getUserName(4).then(data => expect(data).toEqual('Mark'));
    });

    it('verifica sé é encontrado o nome Paul', () => {
      expect.assertions(1);
      return getUserName(5).then(data => expect(data).toEqual('Paul'));
    });

    it('lança mensagem de erro ao informar id inexistente', () => {
      expect.assertions(1);
      return getUserName(2).catch(error =>
        expect(error).toEqual({ error: 'User with 2 not found.' })
      );
    });
  });

  describe('reescrevendo os testes utilizando async/await', () => {
    it('verifica sé é encontrado o nome Mark', async () => {
      expect.assertions(1);
      const name = await getUserName(4);
      expect(name).toEqual('Mark');
    });

    it('verifica sé é encontrado o nome Paul', async () => {
      expect.assertions(1);
      const name = await getUserName(5);
      expect(name).toEqual('Paul');
    })

    it('lança mensagem de erro ao informar id inexistente', async () => {
      expect.assertions(1);
      try {
        await getUserName(7);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 7 not found.' })
      }
    })
  });
});
