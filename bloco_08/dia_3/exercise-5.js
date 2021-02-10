const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

const values = names.reduce((acc, currentValue) => acc + currentValue.split('').reduce((acc, current) => {
  if (current === 'a' || current === 'A') {
    return acc + 1;
  }
  return acc;
}, 0), 0);

console.log(values);

// function containsA() {
//   // escreva seu código aqui
  
// }

// assert.deepStrictEqual(containsA(), 20);