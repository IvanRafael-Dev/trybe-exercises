const calc3Param = require('./ex_1');
const randomTo100 = require('./ex_2');

async function calculoAleatorio() {
  try {
    const result = await calc3Param(randomTo100(), randomTo100(), randomTo100());
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

calculoAleatorio();