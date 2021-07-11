module.exports = {
  testaNumero: (num) => {
    if (typeof num !== 'number') return 'O paramatro deve ser um valor do tipo "number"';
    if (num < 0) {
      return 'Negativo'
    } else if (num > 0) {
      return 'Positivo';
    };
    return 'Neutro';
  }
}