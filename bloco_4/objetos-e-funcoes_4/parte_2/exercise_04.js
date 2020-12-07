/*
Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda.
*/

function showHigherString(array){
    biggerWord = array[0];
    for (let index in array){
        if(biggerWord.length < array[index].length){
            biggerWord = array[index];
        }
    }
    return biggerWord;
}


let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(showHigherString(teste));