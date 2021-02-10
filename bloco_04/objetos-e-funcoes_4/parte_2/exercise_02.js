/*
Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4.
*/

function returnHigherIndex(array){
    higherIndex = array[0];
    for(let index in array){
        if (array[higherIndex] < array[index]){
            higherIndex = index;
        }
    }
    return higherIndex;
}


let teste = [2, 3, 6, 7, 10, 1];

console.log(returnHigherIndex(teste));
