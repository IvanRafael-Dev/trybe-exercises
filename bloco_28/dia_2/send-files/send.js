const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

// criando um stream de um arquivo
const stream = fs.createReadStream('../../../../../eu.png');

// criar um formulario com um campo chamado 'file' que carregará o stream do arquivo
const form = new FormData();
form.append('file', stream)

/* Esse arquivo não será enviado no body da requisição como de costume. */
/* Em ambientes NodeJS, é preciso setar o valor de boundary no header */
/* 'Content-Type' chamando o método `getHeaders` */

const formHeaders = form.getHeaders();

axios
  .post('http://localhost:3000/files/upload', form,  {
    headers: {
      ...formHeaders,
    }
  })
  .then((res) => {
    console.log({
      status: res.status,
      method: res.config.method,
      file: res.data.file
    })
  })
  .catch((err) => {
    console.log(err);
  })