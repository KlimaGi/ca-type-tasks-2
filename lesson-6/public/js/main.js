"use strict";
console.group('1. Sukurkite funkciją "joinArrays", kuri apjungia 2 masyvus. Grąžinamo masyvo tipas turi būti lygus parametrais perduotų masyvų tipų sajungai');
{
    const joinArrays = (arr1, arr2) => [...arr1, ...arr2];
    console.log('joinArrays([1, 2, 3], [4, 5, 6])', joinArrays([1, 2, 3], [4, 5, 6]));
    console.log('joinArrays([1, 2, 3], ["a","b"])', joinArrays([1, 2, 3], ['a', 'b']));
}
console.groupEnd();
console.group('2. Sukurkite funkciją "joinObjects", kuri apjungia 2 objektus. Apjungtam objekto tipe, turi būti visos savybės kurios buvo objekte pirmu parametru, ir objekte antru parametru.');
{
}
console.groupEnd();
console.group('3. Sukurkite funkciją "applyFilters", kuri priima masyvą elementų, ir masyvą filtravimo funkcijų. Panaudokite visas filtravimo funkcijas masyvo elementams filtruoti.');
{
    const applyFilters = (arr, filterFns) => filterFns.reduce((filteredArr, filterFn) => filteredArr.filter(filterFn), arr);
    const isEqual = (x) => x % 2 === 0;
    const isPositive = (x) => x > 0;
    const isInteger = (x) => x % 1 === 0;
    const numbers = [1, 2, 3, 4, 5, 6, 6.34, -7];
    const filteredArr = applyFilters(numbers, [isEqual, isPositive, isInteger]);
    console.log('filteredArr', filteredArr);
    const applyFilters2 = (arr, filterFns) => filterFns.reduce((prevArr, filterFn) => prevArr.filter(filterFn), arr);
    const isLongerThen2Symbols = (x) => x.length > 2;
    const isShorterThen8Symbols = (x) => x.length < 8;
    const words = ['a', 'ab', 'abc', 'abcd', 'abcde', 'abcdefghi'];
    const filteredWords = applyFilters2(words, [isLongerThen2Symbols, isShorterThen8Symbols]);
    console.log('filteredWords', filteredWords);
}
console.groupEnd();
console.group('4. Sukurkite funkciją "applySortings", kuri priima masyvą elementų, ir masyvą rikiavimo funkcijų. Panaudokite visas rikiavimo funkcijas masyvo elementams rikiuoti.');
{
}
console.groupEnd();
console.group('5. Sukurkite funkciją "groupBy", kuri priima masyvą objektų, ir obejkto savybės pavadinimą. Funkcija turi sugrupuoti masyvo elementus, pagal savybės pavadinimo reikšmes');
{
}
console.groupEnd();
//# sourceMappingURL=main.js.map