const states = [
  "AC",
  "AL",
  "AM",
  "AP",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MG",
  "MS",
  "MT",
  "PA",
  "PB",
  "PE",
  "PI",
  "PR",
  "RJ",
  "RN",
  "RO",
  "RR",
  "RS",
  "SC",
  "SE",
  "SP",
  "TO",
];
const statesNames = [
  "Acre",
  "Alagoas",
  "Amazonas",
  "Amapá",
  "Bahia",
  "Ceará",
  "Destrito Federal",
  "Espírito Santo",
  "Goias",
  "Maranhão",
  "Minas Gerais",
  "Mato Grosso do Sul",
  "Mato Grosso",
  "Pará",
  "Paraíba",
  "Pernambuco",
  "Piauí",
  "Paraná",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rondônia",
  "Roraima",
  "Rio Grande do Sul",
  "Santa Catarina",
  "Sergipe",
  "São Paulo",
  "Tocantins",
];

const select = document.getElementById("states");

function createStateOptions() {
  for (let index = 0; index < states.length; index++) {
    const option = document.createElement("option");
    select.appendChild(option);
    option.value = states[index].toLowerCase();
    option.innerText = statesNames[index];
  }
}

function validateDate() {
  const inputDate = document.getElementById('start-date').value.split('/');
  if (
    inputDate[0] < 0 ||
    inputDate[0] > 31 ||
    inputDate[1] < 0 ||
    inputDate[1] > 12 ||
    inputDate[2] < 0 ||
    inputDate[2].length !== 4
  ) {
    alert('Data Inválido')
  }
}

function submitForm(event) {
  event.preventDefault();
  const inputs = document.querySelectorAll('input[type=text]');
  const radios = document.querySelectorAll('input[type=radio]');
  const textArea = document.querySelector('textarea');
  const select = document.querySelector('select');
  const section = document.querySelector('section');
  for (let index = 0; index < inputs.length; index += 1) {
    const paragraph = document.createElement('p');
    paragraph.innerText = inputs[index].value;
    section.appendChild(paragraph);
  }
  
}

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', submitForm)

const startDate = document.querySelector('#start-date');
startDate.addEventListener('change', validateDate);

createStateOptions();


// window.onload = function () {
//   createStateOptions();
// };
