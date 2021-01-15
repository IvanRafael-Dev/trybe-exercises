// const fatorialDe = number => {
//   let result = 1;
//   for (let index = 1; index <= number; index += 1) {
//     result *= index;
//   }
//   return result;
// }

// console.log(fatorialDe(5))

function fatorialDe(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * fatorialDe(--num);
  }
}

console.log(fatorialDe(5))