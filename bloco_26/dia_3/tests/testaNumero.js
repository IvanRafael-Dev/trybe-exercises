const { expect } = require('chai');
const { testaNumero } = require('../testaNumero');


describe('Testa a funcao testaNumero', () => {
  describe('quando o numero é menor que Zero', () => {
    const resposta = testaNumero(-1);
    it('o numero é negativo', () => {
      expect(resposta).to.be.equal('Negativo');
    });

    it('o retorno é uma string', () => {
      expect(resposta).to.be.a('string');
    });
  })
  describe('quando o numero é maior que Zero', () => {
    const resposta = testaNumero(1);
    it('o numero é positivo', () => {
      expect(resposta).to.be.equal('Positivo');
    });
    it('o retorno é uma string', () => {
      expect(resposta).to.be.a('string');
    });
  })
  describe('quando o numero é igual a Zero', () => {
    const resposta = testaNumero(0);
    it('o numero é neutro', () => {
      expect(resposta).to.be.equal('Neutro');
    });
    it('o retorno é uma string', () => {
      expect(resposta).to.be.a('string');
    });
  });
  describe('quando o parametro passado nao é do tipo "number"', () => {
    const resposta = testaNumero('abc');
    it('retorna um mensagem de aviso', () => {
      expect(resposta).to.be.equal('O paramatro deve ser um valor do tipo "number"');
    });
  });
});