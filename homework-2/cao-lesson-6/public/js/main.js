"use strict";
const add = (a, b) => a + b;
const a = 7;
const b = 8;
console.log('{a, b}', { a, b });
console.log({
    'add(a, b)': add(a, b),
    'add(3, 10)': add(3, 10),
});
const numbersArr = [1, 3, 5, 7];
const doubleNumbers = numbersArr.map(x => x * 2);
console.log('doubleNumbers', doubleNumbers);
//# sourceMappingURL=main.js.map