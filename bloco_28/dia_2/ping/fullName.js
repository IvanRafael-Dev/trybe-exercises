const axios = require('axios');

const body = {
  firstName: 'Chico',
  lastName: 'Buarque'
}

const getFullName = async (bodyObj) => {
  try {
    const response = await axios.post('http://localhost:3000/artist', bodyObj)
    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
}

getFullName(body);