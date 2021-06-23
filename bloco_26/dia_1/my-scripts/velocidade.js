const readline = require('readline-sync');

function avgSpeed() {
  let again = true;
  while (again) {
    let time = readline.questionInt("Informe o tempo em segundos: ");
    let distance = readline.questionInt("Informe a distancia em metros: ");
    let avgSpeed = distance / time;  
    console.log(`A velocidade média foi de ${avgSpeed.toFixed(2)}m/s ou ${(avgSpeed * 3.6).toFixed(2)}km/h`)
    again = readline.keyInYN('Deseja realizar outro cálculo?: ');
  } 
}

avgSpeed(); 