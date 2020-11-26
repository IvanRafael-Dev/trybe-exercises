/* Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.*/
let angulo_1 = 40;
let angulo_2 = 30;
let angulo_3 = 110;
let total = angulo_1 + angulo_2 + angulo_3;
let isTriangulo = false;

if (total == 180){
    isTriangulo = true;
    console.log('O estado do triangulo é: ' + isTriangulo);
}else{
    console.log('O estado do triangulo é: ' + isTriangulo);
}


