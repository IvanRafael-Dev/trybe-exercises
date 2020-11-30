/* Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 . */

let contagem = [];
for (let index = 0; index < 25; index += 1) {
    contagem.push(index + 1);
    console.log(contagem[index] + ' dividido por 2 = ' + contagem[index] / 2);
} 
