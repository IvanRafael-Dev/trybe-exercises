/* 
Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];.
Valor esperado no retorno da função: 6.
*/

function returnLowerIndex (array) {
    lowerIndex = array[0];
    for (let index in array) {
        if (array[lowerIndex] > array[index]){
            lowerIndex = index;
        }
    }
    return lowerIndex;
}

let teste =[2, 4, 6, 7, 10, 0, -3];
console.log(returnLowerIndex(teste));

