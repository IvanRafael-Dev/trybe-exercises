/*6- Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar. */

let num = 7;
let isPrimo = true;

for (let i = 2; i < num; i += 1){
    if (num % i == 0){
        isPrimo = false;
        console.log('O número '+ num +' é divisivel por '+ i);
    }
}

if(isPrimo){
    console.log('O número ' + num + ' é primo');
}else{
    console.log('O número ' + num + ' não é primo');
}