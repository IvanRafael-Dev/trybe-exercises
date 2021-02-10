/*
Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome("arara") ;
Retorno esperado: true
verificaPalindrome("desenvolvimento") ;
Retorno esperado: false
*/

function verifyPalindrome(string){
    let arrayOfChar = string.split('');
    let isPalindrome = true;
    for(let index in arrayOfChar){
        if (arrayOfChar[index] != string[string.length - 1 - index]){
            isPalindrome = false;
        }
    }
    return isPalindrome;
}

function verificaPalindromo(string){
    let reverseString = string.split().reverse().join('');
    if (reverseString === string){
        return true;
    }else {
        return false;
    }
}

console.log(verifyPalindrome('abecba'));
console.log(verificaPalindromo('arara'));




