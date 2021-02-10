/* Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
*******

*/
let n = 19;
let middle = (n+1)/2;
let asterisco = '*';
let right = middle;
let left = middle;
let output = '';

for (let line = 1; line <= middle; line++) {
   output = '';
   for (let column = 1; column <= n; column++) {
      if (column == right || column == left || line == middle) {
         output += asterisco;
      } else {
         output += ' ';
      }
   }
   right += 1;
   left -= 1;
   console.log(output);
}

