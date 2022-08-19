"use strict";
const merge = (user, overrides) => {
    return {
        ...user,
        ...overrides,
    };
};
console.log('merge', merge({
    name: 'Jack',
    id: 'foo',
    email: 'some@some.com',
}, {
    email: 'somebazz@some.com',
}));
const mapById = (users) => {
    return users.reduce((acc, curr) => {
        const { id, ...other } = curr;
        return {
            ...acc,
            [id]: other,
        };
    }, {});
};
console.log('mapById', mapById([
    {
        id: 'foo',
        name: 'Mr. Foo',
    }, {
        id: 'baz',
        name: 'Mrs. Baz',
    },
]));
const dog = {
    name: 'LG',
    breed: 'Mutt',
    age: 22,
};
const people = [
    {
        name: 'Jonas',
        surname: 'Jonaitis',
        sex: 'male',
        age: 26,
        income: 1200,
        married: false,
        hasCar: false,
    },
    {
        name: 'Severija',
        surname: 'Piktutytė',
        sex: 'female',
        age: 26,
        income: 1300,
        married: false,
        hasCar: true,
    },
    {
        name: 'Valdas',
        surname: 'Vilktorinas',
        sex: 'male',
        age: 16,
        income: 0,
        married: false,
        hasCar: false,
    },
    {
        name: 'Virginijus',
        surname: 'Uostauskas',
        sex: 'male',
        age: 32,
        income: 2400,
        married: true,
        hasCar: true,
    },
    {
        name: 'Samanta',
        surname: 'Uostauskienė',
        sex: 'female',
        age: 28,
        income: 1200,
        married: true,
        hasCar: true,
    },
    {
        name: 'Janina',
        surname: 'Stalautinskienė',
        sex: 'female',
        age: 72,
        income: 364,
        married: false,
        hasCar: false,
    },
];
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
    const personToIdentity = ({ name, surname }) => {
        return { name, surname };
    };
    const identities = people.map(personToIdentity);
    console.table(people);
    console.table(identities);
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
    const selectTaskProps = ({ married, hasCar }) => ({
        married: Boolean(married),
        hasCar: Boolean(hasCar),
    });
    const result = people.map(selectTaskProps);
    console.table(people);
    console.table(result);
}
console.groupEnd();
console.group('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
    const selectTaskProps = ({ name, surname, married }) => ({
        name, surname, married,
    });
    const result = people.map(selectTaskProps);
    console.log('people', people);
    console.log('result', result);
}
console.groupEnd();
console.group('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
    const selectSexIncome = ({ sex, income }) => ({
        sex, income,
    });
    const result = people.map(selectSexIncome);
    console.log('people', people);
    console.log('result', result);
}
console.groupEnd();
console.group('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
    const selectNamesSurnamesSex = ({ name, surname, sex }) => ({
        name, surname, sex
    });
    const result = people.map(selectNamesSurnamesSex);
    console.log('people', people);
    console.log('result', result);
}
console.groupEnd();
console.group('6. Atspausdinkite visus vyrus');
{
    const isMale = ({ sex }) => sex === 'male';
    const males = people.filter(isMale);
    console.log('people', people);
    console.log('males', males);
}
console.groupEnd();
console.group('7. Atspausdinkite visas moteris');
{
    const isFemale = ({ sex }) => sex === 'female';
    const males = people.filter(isFemale);
    console.log('people', people);
    console.log('males', males);
}
console.groupEnd();
console.group('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
    const personHasCar = ({ hasCar }) => Boolean(hasCar);
    const createIdentity = ({ name, surname }) => ({ name, surname });
    const identityReducer = (result, { hasCar, name, surname }) => {
        if (hasCar)
            result.push({ name, surname });
        return result;
    };
    const peopleWithCars = people.filter(personHasCar);
    const indentities = peopleWithCars.map(createIdentity);
    const identities2 = people.reduce(identityReducer, []);
    console.log('people', people);
    console.log('indentities', indentities);
    console.log('identitiess2', identities2);
}
console.groupEnd();
console.group('9. Atspausdinkite žmones kurie yra susituokę');
{
    const marriedReducer = (result, person) => {
        if (person.married)
            result.push(person);
        return result;
    };
    const marriedPeople = people.reduce(marriedReducer, []);
    console.log('people', people);
    console.log('marriedPeople', marriedPeople);
}
console.groupEnd();
console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
}
console.groupEnd();
console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
}
console.groupEnd();
console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
}
console.groupEnd();
console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
}
console.groupEnd();
//# sourceMappingURL=main.js.map