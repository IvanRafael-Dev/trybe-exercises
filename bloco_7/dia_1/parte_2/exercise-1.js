const fatorialDe = number => {
  let result = 1;
  for (let index = 1; index <= number; index += 1) {
    result *= index;
  }
  return result;
}

console.log(fatorialDe(5))

// function fatorial(number) {
//   if (number === 0) {
//     return 1;
//   } else {
//     return number * fatorial(--number);
//   }
// }
// console.log(fatorial(5))

const fatorial = number => (number === 0) ? 1 : number * fatorial(--number);
console.log(fatorial(5))