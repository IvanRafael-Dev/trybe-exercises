const uppercase = require('./exercise-1');

describe('Testes da funcão uppercase', () => {
  
  it('uppercase should be defined', () => {
    expect(uppercase).toBeDefined();
  })

  it('should return string in uppercase', () => {
    uppercase('Ivan', string =>
    expect(string).toBe('IVAN'))    
  })
  
})
