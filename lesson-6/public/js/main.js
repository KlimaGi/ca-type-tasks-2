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
    const isLongerThen2Symbols = (x) => x.length > 2;
    const isShorterThen8Symbols = (x) => x.length < 8;
    const words = ['a', 'ab', 'abc', 'abcd', 'abcde', 'abcdefghi'];
    const filteredWords = applyFilters(words, [isLongerThen2Symbols, isShorterThen8Symbols]);
    console.log('filteredWords', filteredWords);
}
console.groupEnd();
console.group('4. Sukurkite funkciją "applySortings", kuri priima masyvą elementų, ir masyvą rikiavimo funkcijų. Panaudokite visas rikiavimo funkcijas masyvo elementams rikiuoti.');
{
    const people = [
        { city: 'Vilnius', surname: 'Bandziūga', age: 17 },
        { city: 'Kaunas', surname: 'Britkus', age: 28 },
        { city: 'Kaunas', surname: 'Žinlinskas', age: 16 },
        { city: 'Rietavas', surname: 'Varkienė', age: 63 },
        { city: 'Vilnius', surname: 'Hienytė', age: 22 },
        { city: 'Kaunas', surname: 'Malūnas', age: 32 },
        { city: 'Kaunas', surname: 'Žiobaras', age: 32 },
        { city: 'Vilnius', surname: 'Fosforas', age: 22 },
        { city: 'Kaunas', surname: 'Mažuronis', age: 19 },
        { city: 'Kaunas', surname: 'Princas', age: 32 },
        { city: 'Vilnius', surname: 'Klinkaitė', age: 32 },
        { city: 'Kaunas', surname: 'Griovys', age: 47 },
        { city: 'Rietavas', surname: 'Žinduolis', age: 29 },
        { city: 'Vilnius', surname: 'Amadėjus', age: 23 },
    ];
    const compareByAgeASC = (p1, p2) => p1.age - p2.age;
    const compareByCityASC = (p1, p2) => p1.city.localeCompare(p2.city);
    const compareBySurnameASC = (p1, p2) => p1.surname.localeCompare(p2.surname);
    const applySortings = (people, compareFunctions) => {
        const sortedPeople = [...people];
        sortedPeople.sort((p1, p2) => {
            for (let i = 0; i < compareFunctions.length; i += 1) {
                const compareFunction = compareFunctions[i];
                const comparisonResult = compareFunction(p1, p2);
                if (comparisonResult !== 0) {
                    return comparisonResult;
                }
            }
            return 0;
        });
        return sortedPeople;
    };
    const sortedPeople = applySortings(people, [
        compareByCityASC,
        compareByAgeASC,
        compareBySurnameASC
    ]);
    console.log('sortedPeople', sortedPeople);
}
console.groupEnd();
console.group('5. Sukurkite funkciją "groupBy", kuri priima masyvą objektų, ir obejkto savybės pavadinimą. Funkcija turi sugrupuoti masyvo elementus, pagal savybės pavadinimo reikšmes');
{
    ;
    const groupBy = (arr, key) => arr.reduce((prevGroupedObject, person) => {
        const groupName = person[key];
        if (groupName in prevGroupedObject) {
            prevGroupedObject[groupName].push(person);
        }
        else {
            prevGroupedObject[groupName] = [person];
        }
        return prevGroupedObject;
    }, {});
    const people = [
        { city: 'Vilnius', surname: 'Bandziūga', age: 17 },
        { city: 'Kaunas', surname: 'Britkus', age: 28 },
        { city: 'Kaunas', surname: 'Žinlinskas', age: 16 },
        { city: 'Rietavas', surname: 'Varkienė', age: 63 },
        { city: 'Vilnius', surname: 'Hienytė', age: 22 },
        { city: 'Kaunas', surname: 'Malūnas', age: 32 },
        { city: 'Kaunas', surname: 'Žiobaras', age: 32 },
        { city: 'Vilnius', surname: 'Fosforas', age: 22 },
        { city: 'Kaunas', surname: 'Mažuronis', age: 19 },
        { city: 'Kaunas', surname: 'Princas', age: 32 },
        { city: 'Vilnius', surname: 'Klinkaitė', age: 32 },
        { city: 'Kaunas', surname: 'Griovys', age: 47 },
        { city: 'Rietavas', surname: 'Žinduolis', age: 29 },
        { city: 'Vilnius', surname: 'Amadėjus', age: 23 },
    ];
    const groupedPeople = groupBy(people, 'age');
    const groupedPeople2 = groupBy(people, 'city');
    console.log('groupedPeople', groupedPeople);
    console.log('groupedPeople2', groupedPeople2);
}
console.groupEnd();
//# sourceMappingURL=main.js.map