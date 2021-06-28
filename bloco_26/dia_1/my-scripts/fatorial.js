const readline = require('readline-sync');
const fatorial = (userNum) => {
  return userNum === 0 ? 1 : userNum * fatorial(userNum - 1);
};

let newFatorial = true;

function exibeFatorial() {
  const userNum = readline.questionFloat('Insira um número inteiro maior que 0: ');  
  if (Number.isInteger(userNum) && userNum > 0) {
    console.log(`O fatorial de ${userNum} é igual a: ${fatorial(userNum)}`);
  } else {
    console.log(`O numero não é inteiro ou é menor que 1`);
  }
}

while (newFatorial) {
  exibeFatorial();
  newFatorial = readline.keyInYN('Novo fatorial? ');
};
