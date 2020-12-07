/*
Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3];.
Valor esperado no retorno da função: 2.
*/

function verificaMaisRepetido(array){
    let vezesRepetido = 0;
    let maisVezesRepetido = 0;
    let indexNumRepetido = 0;
    let indexMaisRepetido = array[0];

    for (let index = 0; index < array.length; index += 1) {
        vezesRepetido = 0;    
        for (let j = 0; j < array.length; j += 1){
            if (array[j] === array[index]){
                vezesRepetido += 1;
                indexNumRepetido = j;

            }
        }
        if (vezesRepetido > maisVezesRepetido){
            maisVezesRepetido = vezesRepetido;
            indexMaisRepetido = indexNumRepetido;
        }

    }
    return array[indexMaisRepetido];
}


let teste = [2, 3, 2, 5, 8, 2, 3];

console.log(verificaMaisRepetido(teste));