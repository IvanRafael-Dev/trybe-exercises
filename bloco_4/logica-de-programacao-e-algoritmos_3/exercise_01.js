/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n; 
n = 5;
*****
*****
*****
*****
*****
*/

let n = 5;
let sinal = "*";
for (let index = 0; index < n; index += 1) {
  console.log(sinal.repeat(n));
}
