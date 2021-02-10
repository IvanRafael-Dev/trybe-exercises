/*4- Depois, faça uma pirâmide com n asteriscos de base:
Copiar
n = 5

  *
 ***
*****
*/

let asterisco = '*';
let espaco = '';
let contador = 3;
for (let index = 0; index < 3; index += 1) {
    espaco = '';
    for(let j = contador; j > 1 ; j -= 1) {
        espaco += ' ';
       
    }
    contador -= 1;
    console.log(espaco+asterisco)
    asterisco += '**'
}