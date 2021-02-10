/* Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .*/ 

let num1 = 8;
let num2 = 4;
let num3 = 9;
let isImpar = false;

if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0){
    isImpar = true;
    console.log('Um número é impar?: ' + isImpar);
}

console.log(isImpar);