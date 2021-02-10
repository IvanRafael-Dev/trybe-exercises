/* Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if . */

let num1 = 7;
let num2 = 9;
let num3 = 1;
let isPar = false;

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0){
    isPar = true;
    console.log('Um número é par?: ' + isPar);
}

console.log(isPar);