const states = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
const statesNames = ['Acre', 'Alagoas', 'Amazonas', 'Amapá', 'Bahia', 'Ceará', 'Destrito Federal', 'Espírito Santo', 'Goias', 'Maranhão', 'Minas Gerais', 'Mato Grosso do Sul', 'Mato Grosso', 'Pará', 'Paraíba', 'Pernambuco', 'Piauí', 'Paraná', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rondônia', 'Roraima', 'Rio Grande do Sul', 'Santa Catarina', 'Sergipe', 'São Paulo', 'Tocantins'];

const select = document.getElementById('states')

function createStateOptions() {
  for (let index = 0; index < states.length; index++) {
    const option = document.createElement('option');
    select.appendChild(option);
    option.value = states[index].toLowerCase();
    option.innerText = statesNames[index];
  } 
}

// function validateDate() {
//   let inputDate = document.getElementById('start-date').value;
//   // if(inputDate.indexOf('/') === 2 || inputDate.indexOf('/') === 5){
//     let day = inputDate.substring(0, 2);
//     let month = inputDate.substring(3, 5);
//     let year = inputDate.substring(6, 10);
//     if ((day < 0 && day > 31) || (month < 0 && month > 12) || (year < 0 && year.length !== 4)){
//      alert('Formato de data incorreta (dd/mm/aaaa)');
//      return;
//     // }
//   }
// }

window.onload = function () {
  createStateOptions();
  // validateDate();
}