/* Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado; */

let contagem = new Array(25);

for (let index = 0; index < contagem.length; index += 1) {
    contagem[index] = index + 1;    
}

console.log(contagem);

/* ou */

let contagem2 = [];
for (let index = 0; index < 25; index += 1) {
    contagem2.push(index + 1);
}
 
console.log(contagem2);