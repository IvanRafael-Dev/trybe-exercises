/* 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
Copiar
n = 5

*
**
***
****
*****

*/

let asterisco = '*';

for (let index = 0; index < 5; index += 1) {
    console.log(asterisco);
    asterisco += '*';
}