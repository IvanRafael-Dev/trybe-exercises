const readline = require('readline-sync');

let newFibo = true;

function fib() {
  const termo = readline.questionInt('Informe o termo: ')
  let arr = [];
  let penultimo = 0;
  let ultimo = 1;
  let proximo = 1;

  for (let i = 0; i < termo; i++) {

    arr.push(proximo);
    proximo = penultimo + ultimo;
    penultimo = ultimo;
    ultimo = proximo;
  }
  console.log(arr);
}

while (newFibo) {
  fib();
  newFibo = readline.keyInYN('Deseja inserir um novo termo?: ');
}


// Armazene o script no arquivo fibonacci.js .
// Utilize o readline-sync para realizar o input de dados.
// O script deve ser acionado através do comando npm run fibonacci
// Adicione o script ao menu criado no exercício 5.
// Não imprima o valor 0 , uma vez que ele não está incluso na sequência;
// Quando n = 10 , exatamente 10 elementos devem ser exibidos;
// Adicione validações para garantir que o valor informado é um inteiro maior que 0.

