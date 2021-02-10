/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop -> diagonals */

let nomePeca = 'RAINHA';
nomePeca = nomePeca.toLowerCase();

switch (nomePeca){
    case 'peao':
        console.log('O Peao se move 1 casa para frente');
        break;
    case 'bispo':
        console.log('O Bispo se move nas diagonais');
        break;
    case 'cavalo':
        console.log('O Cavalo se move em L');
    case 'torre':
        console.log('A Torre se move na horizontal e na vertical');
        break;
    case 'rei':
        console.log('O Rei se move 1 casa em qualquer direção');
        break;
    case 'rainha':
        console.log('A Rainha se move em qualquer direção');
        break;
    default:
        console.log('Não é uma peça conhecida');
}