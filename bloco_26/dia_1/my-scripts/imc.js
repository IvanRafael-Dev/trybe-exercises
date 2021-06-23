const readline = require('readline-sync');

let newImc = true;

function imc() {
  const peso = readline.questionFloat("Informe seu peso em kg: ");
  const altura = readline.questionFloat("Informe sua altura em metros: ");
  const imc = peso / Math.pow(altura, 2);  
  
  imcTable(imc);
  pesoIdeal(imc, peso, altura);
  newImc = readline.keyInYN('Deseja realizar outra medição?: ')
};

function pesoIdeal(imc, peso, altura) {

  const pesoIdealMin = Math.round(18.5 * Math.pow(altura, 2));
  const pesoIdealMax = Math.round(25 * Math.pow(altura, 2));

  if (imc > 25) {
    console.log(`Seu peso ideal é entre: ${pesoIdealMin} e ${pesoIdealMax}, você está ${peso - pesoIdealMax}kg acima do peso`);
  } else if (imc < 18.5) {
    console.log(`Seu peso ideal é entre: ${pesoIdealMin} e ${pesoIdealMax}, você está ${pesoIdealMin - peso}kg abaixo do peso`);
  } else {
    console.log(`Seu peso (${peso}kg), está a faixa ideal entre ${pesoIdealMin} e ${pesoIdealMax}kg`);
  }
}

function imcTable(imc) {

  if (imc < 18.5) {
    console.log(`Seu IMC é: ${imc}, você está abaixo do peso (magreza)`);    
  } else if (imc >= 18.5 && imc < 25) {
    console.log(`Seu IMC é: ${imc}, você está com seu peso normal.`);
  } else if (imc >= 25 && imc < 30) {
    console.log(`Seu IMC é: ${imc}, você está acima do peso (sobrepeso)`);
  } else if (imc >= 30 && imc < 35) {
    console.log(`Seu IMC é: ${imc}, você está com obesidade grau I)`);
  } else if (imc >= 35 && imc < 40) {
    console.log(`Seu IMC é: ${imc}, você está com obesidade grau II)`);
  } else {
    console.log(`Seu IMC é: ${imc}, você está com obesidade graus III e/ou IV)`);    
  }
}

while (newImc) {
  imc();
}
