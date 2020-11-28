/* Agora inverta o lado do triângulo. Por exemplo:

n = 5

    *
   **
  ***
 ****
*****
Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.
*/

let n = 5;
let asterisco = '*';
let espaco = ' ';
let contador = n;
for (let index = 0; index < n; index += 1) {
    espaco = ' ';
    for(let j = contador; j > 1 ; j -= 1) {
        espaco += ' ';
        
    }
    contador -= 1;
    console.log(espaco+asterisco)
    asterisco += '*'
}


/* ou simplificando *///
console.log('\nSimplificando');
//let n = 5;

for (let index = 0; index <= n; index += 1){
    console.log(' '.repeat(n-index) + '*'.repeat(index))
}

