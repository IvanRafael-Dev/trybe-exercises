const readline = require('readline-sync');

function sorteio() {
  let newGame = true;
  while (newGame) {
    const numSorteado = Math.round(Math.random() * 10);
    let userNum = readline.questionInt("Digite um numero: ");
  
    if (numSorteado === userNum) {
      console.log("Parabens!!!, você acertou!!")
    } else {
      console.log(`Você errou!!, o número sorteado era ${numSorteado}`)
    }  
    newGame = readline.keyInYN("Deseja jogar novamente? ")
  }
}

sorteio();



// Crie um "jogo de adivinhação" em que a pessoa ganha se acertar qual foi o número aleatório gerado
// O script deve ser executado através do comando npm run sorteio .
// Utilize o readline-sync para realizar input de dados.
// Armazene o script em sorteio.js .
// O número gerado deve ser um inteiro entre 0 e 10.
// Caso a pessoa acerte o número, exiba na tela "Parabéns, número correto!".
// Caso a pessoa erre o número, exiba na tela "Opa, não foi dessa vez. O número era [número sorteado]".
// Ao final, pergunte se a pessoa deseja jogar novamente. Se sim, volte ao começo do script.