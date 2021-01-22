const assert = require('assert')

// escreva sum abaixo


// const sum = (...rest) => rest.reduce((acc, current) => acc + current, 0);

const sum = (...num) => num.reduce((acc, currentValue) => acc + currentValue, 0);

console.log(sum(1, 2, 3, 4));

assert.strictEqual(sum(), 0)
assert.strictEqual(sum(1), 1)
assert.strictEqual(sum(1, 2), 3)
assert.strictEqual(sum(1, 2, 3), 6)
assert.strictEqual(sum(1, 2, 3, 4), 10)