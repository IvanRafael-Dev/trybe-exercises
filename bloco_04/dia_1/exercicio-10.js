/* Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)
*/

let custoProduto = 9;
let valorVenda = 25;
let qtdDeProdutosVendidos = 1000;
let valorProdutoVendidos = custoProduto * qtdDeProdutosVendidos;
let valorTotalVenda = valorVenda * qtdDeProdutosVendidos;
let impostoProduto = valorProdutoVendidos * 20 / 100;
let custoTotalProdutos = valorProdutoVendidos + impostoProduto;
let lucro = valorTotalVenda - custoTotalProdutos;

if (custoProduto > 0 && valorVenda > 0){
    console.log('Custo total do produto: R$' + valorProdutoVendidos);
    console.log('Valor do imposto (20%): R$' + impostoProduto);
    console.log('Valor de custo total: R$' + custoTotalProdutos);
    console.log('Valor da venda: R$' + valorTotalVenda);
    console.log('---------------');
    console.log('Lucro total: R$' + lucro);
}else{
    console.log('Valores inválidos');
}