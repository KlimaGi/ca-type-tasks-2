// import { add } from "./helpers/calc";

const add = (a: number, b: number): number => a + b;

const a: number = 7;
const b: number = 8;

console.log('{a, b}', { a, b });
console.log({
  'add(a, b)': add(a, b),
  'add(3, 10)': add(3, 10),
});

const numbersArr: number[] = [1, 3, 5, 7];
const doubleNumbers = numbersArr.map(x => x * 2);

console.log('doubleNumbers', doubleNumbers);
