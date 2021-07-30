const axios = require('axios');
// console.log(axios);

axios
  .get('http://localhost:3000/ping')
  .then(({ data, status }) => {
    console.log({ data, status });
  })
  .catch((err) => {
    console.log(err);
  })