/* eslint-disable arrow-body-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */
type PrimitiveType = string | number | boolean;

/*
  Šių pratybų tikslas su išspręsti užduotis panaudojant bendrinius tipus. [1-6]
  Funkcijų parametrai turi būti bendrinio tipo/ų, pagal kuriuos būtų suformuojami atsakymai
  7 užduotis, skirta savarankiškai išmokti patikrinti tipus:
  https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
*/

const numbers: number[] = [1, 5, 7];
const strings: string[] = ['y', 'w', 'q'];
const booleans: boolean[] = [true, false, false];

console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  const first = <T>(arr: T[]): T | undefined => arr[0];
  console.log('arr1', first(numbers));
  console.log('arr2', first(strings));
  console.log('arr3', first(booleans));
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
 const last = <T>(arr: Array<T>): T => arr[arr.length - 1];
  const lastEl1 = last(numbers);
  const lastEl2 = last<string>(strings);
  const lastEl3 = last<boolean>(booleans);
  console.log('lastEl1', lastEl1);
  console.log('lastEl2', lastEl2);
  console.log('lastEl3', lastEl3);
}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
  const generateCopy = <T extends PrimitiveType>(arr: T[]) : T[] => {
    const copy: T[] = arr.map((x) => x);
    return copy;
  };
  console.log('numbers copy', generateCopy(numbers));
  console.log('strings copy', generateCopy(strings));
  console.log('booelan copy', generateCopy(booleans));
}
console.groupEnd();

console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
  // ('a', 2) -> ['a', 'a']
  // (77, 4) -> [77, 77, 77, 77]
  // (true, 1) -> [true]
  const repeadByCount = <T extends PrimitiveType>(item: T, count: number): Array<PrimitiveType> => {
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
  type ArgumentSample<T> = [T[], T[]];
  
  const mergeArrays = <Type>(arr1: Type[], arr2: Type[]): Type[] => [...arr1, ...arr2];

  const args1: ArgumentSample<number> = [[1, 5, 6], [8, 9]];
  const args2: ArgumentSample<string> = [['ab', 'ca', 'cb'], ['ba', 'bc']];

  console.log('args1', mergeArrays(...args1));
  console.log('args2', mergeArrays(...args2));
}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
  type IncapsulatedValueObject<Type> = {
    setValue: (newValue: Type) => void,
    getValue: () => Type
  };

  const solution = <Type>(initialValue: Type): IncapsulatedValueObject<Type> => {
    let value: Type = initialValue;

    return {
      setValue: (newValue) => value = newValue,
      getValue: () => value,
    };
  };

  const value1: number = 52;
  const value2: Array<string> = ['ab', 'ca', 'cb'];
  const value3: {name: string, surname: string} = {name: 'Some', surname: 'Again'};

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
// Oficialus būdas patikrinti tipą
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
{
  type Person = {
    name: string,
    surname: string,
  };

  type Student = Person & {
    university: string,
    course: number,
  };

  type Worker = Person & {
    avgMonthlyPay: number,
  };

  type GroupedPeople = {
    people: Person[],
    students: Student[],
    workers: Worker[],
  };

  const isWorker = (person: Person): person is Worker => {
    return (person as Worker).avgMonthlyPay !== undefined;
  }; 
    
  const isStudent = (person: Person): person is Student => {
    const student = person as Student;

    return student.university !== undefined && student.course !== undefined;
  };

  const makeGroups = (people: Person[]): GroupedPeople => {
    const groupedPeople = people.reduce<GroupedPeople>((prevGroupedPeople, person) => {
      const newGroupedPeople = { ...prevGroupedPeople };

      if (isWorker(person)) newGroupedPeople.workers.push(person);
      if (isStudent(person)) newGroupedPeople.students.push(person);
      else newGroupedPeople.people.push(person);

      return newGroupedPeople;
    }, {
      people: [],
      students: [],
      workers: [],
    });
    return groupedPeople;
  };

  const people: (Person | Student | Worker)[] = [
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
