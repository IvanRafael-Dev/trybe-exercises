const replaceX = string => 'Tryber x aqui!'.replace('x', string);
// console.log(replaceX('Ivan'));

const skills = ['HTML', 'Javascript', 'Bash', 'Inteligência Emocional', 'Testes Unitários'];

const concatenateStrings = (replaceX) => {
  return `${replaceX(('Ivan'))}, Minhas cinco principais habilidades são:
${skills.join(', ')}
#goTrybe.`
}

console.log(concatenateStrings(replaceX))