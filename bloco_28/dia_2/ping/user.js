const axios = require('axios');

// axios
  // .get('http://localhost:3000/show/123')
  // .then((response) => {
  //   console.log(response);
  // })
  // .catch((err) => {
  //   console.log(err);
  // })

const getUser = async () => {
  try {
    const response = await axios.get('http://localhost:3000/user?ID=123')
    console.log(response)
  } catch (err) {
    console.log(err);
  }
}

getUser();