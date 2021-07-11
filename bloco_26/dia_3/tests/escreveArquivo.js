/**
 Crie testes para uma função que escreverá um conteúdo em um arquivo específico.
Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
Após concluir a escrita do arquivo ela deverá retornar um ok .
 */
const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs').promises;
const { escreveArquivo } = require('../escreveArquivo');

describe('Testes da função escreveArquivo', () => {

  describe('quando o arquivo é escrito com sucesso', () => {
    before(() => {
      sinon.stub(fs, 'writeFile').resolves('ok');
    });

    after(() => {
      fs.writeFile.restore();
    });
    describe('a resposta', () => {
      it('deve ser uma string', async () => {
        const resposta = await escreveArquivo('./arquivo.txt', 'Conteúdo do arquivo de escrita');
        expect(resposta).to.be.a('string');
      });
      it('contém a mensagem de "ok"', async () => {
        const resposta = await escreveArquivo('./arquivo.txt', 'Conteúdo do arquivo de escrita');
        expect(resposta).to.be.equal('ok');
      });
    });
  });

  describe('quando o arquivo já existe', () => {

    before(() => {
      sinon.stub(fs, 'writeFile').rejects(new Error('EEXIST: file already exists, open "./arquivo.txt"'));
    });

    after(() => {
      fs.writeFile.restore();
    });
    describe('a resposta', () => {
      it('é uma mensagem("string") de erro', async () => {
        const resposta = await escreveArquivo('./arquivo.txt', 'Conteúdo do arquivo de escrita');
        expect(resposta).to.be.equal('EEXIST: file already exists, open "./arquivo.txt"');
        expect(resposta).to.be.a('string');;
      });
    });
  });
});