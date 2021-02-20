const searchEmployee = require('./bonus');
describe('testes da funçao searchEmployee', () => { 
    
    it('verifica se searchEmplloyee é uma função', () => {
      expect(typeof(searchEmployee)).toBe('function');
    }); 
  
    it('Testa se searchEmployee(id, "firstName") retorna o primeiro nome do usuário da id consultada', () => {
      const atual = searchEmployee('8579-6', 'firstName');
      const expected = 'Ana';
      expect(atual).toBe(expected);
    });
    
    it('Testa se searchEmployee(id, "lastName") retorna o sobre nome do usuário da id consultada', () => {
      const atual = searchEmployee('8579-6', 'lastName');
      const expected = 'Gates';
      expect(atual).toBe(expected);
    });
})

describe('testa o array retornado quando parâmetro specialities especificado', () => {
  
  it('Se ID encontrado e o parametro specialities informado, retorna um array', () => {
    const atual = searchEmployee('8579-6', 'specialities');
    const expected = [ 'UX', 'Design' ];
    expect(atual).toStrictEqual(expected);
  });

  it('se informado Id válido e especialidade, verifica se retorno é um array', () => {
    expect(Array.isArray(searchEmployee('5569-4', 'specialities'))).toBe(true);
  });

  it('verifica se o array retornado possui as especialidades do empregado', () => {
    const atual = searchEmployee('5569-4', 'specialities');
    expect(atual).toContain('Frontend', 'Redux', 'React', 'CSS');
  });
})

describe('testa os lançamentos de erros da função searchEmployee', () => {

  it('verifica mensagem de erro caso Id não encontrado', () => {
    expect(() => { searchEmployee(), searchEmployee('1111-1', 'firstName') }).toThrowError(new Error('ID não identificada'));
  });

  it('verifica se o parâmetro detail da função existe', () => {
    expect(() => { searchEmployee('8579-6', 'first') }).toThrowError(new Error('Informação indisponível'));
  });
});

