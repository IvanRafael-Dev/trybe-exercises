/* Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados. */

let num1 = 5;
let num2 = 4;
let num3 = 3;

if (num1 > num2 && num1 > num3) {
    console.log('O maior número é o ' + num1);
}else if (num2 > num1 && num2 > num3){
    console.log('O maior número é o ' + num2);
}else{
    console.log('O maior número é o ' + num3);
}