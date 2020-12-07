/*
Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
Valor de teste: "trybe" e "be"
Valor esperado no retorno da função: true
verificaFimPalavra("trybe", "be") ;
Retorno esperado: true
verificaFimPalavra("joaofernando", "fernan") ;
Retorno esperado: false
*/

function verificaFimPalavra(word, ending) {
    let temFinalIgual = false;
    let palavra = word.split("").reverse();
    let final = ending.split("").reverse();
    for (let i = 0; i < final.length; i += 1) {
        if (palavra[i] == final[i]){
            temFinalIgual = true;            
        }else{
            temFinalIgual = false;
            break;
        }
    }
    return temFinalIgual;
}



console.log(verificaFimPalavra('Trybe', 'be'));
console.log(verificaFimPalavra('Codando', 'anda'));

