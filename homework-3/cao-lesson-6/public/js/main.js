"use strict";
const numbers = [1, 5, 7];
const strings = ['y', 'w', 'q'];
const booleans = [true, false, false];
console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
    const first = (arr) => arr[0];
    console.log('arr1', first(numbers));
    console.log('arr2', first(strings));
    console.log('arr3', first(booleans));
}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
    const last = (arr) => arr[arr.length - 1];
    const lastEl1 = last(numbers);
    const lastEl2 = last(strings);
    const lastEl3 = last(booleans);
    console.log('lastEl1', lastEl1);
    console.log('lastEl2', lastEl2);
    console.log('lastEl3', lastEl3);
}
console.groupEnd();
console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
    const generateCopy = (arr) => {
        const copy = arr.map((x) => x);
        return copy;
    };
    console.log('numbers copy', generateCopy(numbers));
    console.log('strings copy', generateCopy(strings));
    console.log('booelan copy', generateCopy(booleans));
}
console.groupEnd();
console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
    const repeadByCount = (item, count) => {
        const temp = [];
        for (let i = count; i > 0; i -= 1) {
            temp.push(item);
        }
        return temp;
    };
    console.log('("a", 2)', repeadByCount('a', 2));
    console.log('(77, 4)', repeadByCount(77, 4));
    console.log('(true, 1)', repeadByCount(true, 1));
}
console.groupEnd();
console.group('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
{
    const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
    const args1 = [[1, 5, 6], [8, 9]];
    const args2 = [['ab', 'ca', 'cb'], ['ba', 'bc']];
    console.log('args1', mergeArrays(...args1));
    console.log('args2', mergeArrays(...args2));
}
console.groupEnd();
console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
    const solution = (initialValue) => {
        let value = initialValue;
        return {
            setValue: (newValue) => value = newValue,
            getValue: () => value,
        };
    };
    const value1 = 52;
    const value2 = ['ab', 'ca', 'cb'];
    const value3 = { name: 'Some', surname: 'Again' };
    const obj1 = solution(value1);
    const obj2 = solution(value2);
    const obj3 = solution(value3);
    console.log('obj1.getValue()', obj1.getValue());
    console.log('obj2.getValue()', obj2.getValue());
    console.log('obj3.getValue()', obj3.getValue());
}
console.groupEnd();
console.group(`
  7. Turite 2 tipus: Student ir Worker kurie pasižymi bendrais bruožais Person. 
  Parašykite 2 funkcijas <isStudent> ir <isWorker> skirtas atpažinti koks objektas buvo perduotas.
  Sukūrę tokias funkcijas iteruokite per žmonių masyvą, sugrupuodami elementus pagal tipą`);
{
    const isWorker = (person) => {
        return person.avgMonthlyPay !== undefined;
    };
    const isStudent = (person) => {
        const student = person;
        return student.university !== undefined && student.course !== undefined;
    };
    const makeGroups = (people) => {
        const groupedPeople = people.reduce((prevGroupedPeople, person) => {
            const newGroupedPeople = { ...prevGroupedPeople };
            if (isWorker(person))
                newGroupedPeople.workers.push(person);
            if (isStudent(person))
                newGroupedPeople.students.push(person);
            else
                newGroupedPeople.people.push(person);
            return newGroupedPeople;
        }, {
            people: [],
            students: [],
            workers: [],
        });
        return groupedPeople;
    };
    const people = [
        { name: 'Atstovė', surname: 'Galtokaitė', university: 'VU', course: 2 },
        { name: 'Kurpius', surname: 'Medainis' },
        { name: 'Varnas', surname: 'Akilaitis', avgMonthlyPay: 2000 },
        { name: 'Ferodijus', surname: 'Cilcius' },
        { name: 'Sobora', surname: 'Kupolaityė', avgMonthlyPay: 1000 },
        { name: 'Zubrius', surname: 'Sulindauskas', university: 'VU', course: 2 },
        { name: 'Šidelė', surname: 'Gyslovienė', avgMonthlyPay: 1500 },
        { name: 'Užuodauskas', surname: 'Perrašimauskas', university: 'VGTU', course: 1 },
    ];
    const groupedPeople = makeGroups(people);
    console.log('groupedPeople', groupedPeople);
}
//# sourceMappingURL=main.js.map