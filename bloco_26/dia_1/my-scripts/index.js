const readline = require('readline-sync');

const scripts = [
  { name: 'Cacular IMC', script: './imc.js' },
  { name: 'Calcular Velocidade Média', script: './velocidade.js' },
  { name: 'Jogo de Adivinhação', script: './sorteio.js' },
  { name: 'Fatorial', script: './fatorial.js' },
  { name: 'Fibonacci', script: './fibonacci.js' }
];

const arrayDeOpcoes = scripts.map((script, index) => `${index + 1} - ${script.name}`);
let novamente = true;

scriptOptions(novamente);

function scriptOptions(novamente) {
  while (novamente) {
    console.log('\nEscolha uma opção: \n');
    console.log(arrayDeOpcoes.join('\n'));
    let opcao = readline.questionInt('\nDigite: ');
  
    switch (opcao) {
      case 1:
        console.log('\nCalcule seu IMC!!\n');
        require(scripts[0].script);
        break;
      case 2:
        console.log('\nCalcule a velocidade média!!\n');
        require(scripts[1].script);
        break;
      case 3:
        console.log('\nSorteio!!\n');
        require(scripts[2].script);
        break;
      case 4:
        console.log('\nFatorial!!\n');
        require(scripts[3].script);
        break;
      case 5:
        console.log('\nFibonacci!!\n');
        require(scripts[4].script);
        break;
      default: novamente = readline.keyInYN('\nOpçao invalida, deseja tentar novamente? ');
    }
    if (!novamente) {
      console.log('Obrigado por utilizar meu primeiro Script, até logo!!');
      return;
    }
    novamente = readline.keyInYN('\nRealizar outro script?: ');
    if (!novamente) {
      console.log('Obrigado por utilizar meu primeiro Script, até logo!!');
      return;
    }
  }
}