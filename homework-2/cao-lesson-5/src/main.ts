/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-inner-declarations */

// tipu formavimas ir susaistymas

type User = {
    email: string,
    password: string,
    mobile: string,
    name: string,
    surname: string,
    sex: 'male' | 'female',
    age: number,
    income?: number,
    married?: boolean,
  };

  // papildomu savybiu pridejimas
  type UserRegistration = User & {
    emailConfirmation: User['email'],
    passwordConfirmation: User['password'],
  };

  // keiciamos tik tam tikros savybes
  type UserUpdate = {
    [Key in keyof Omit<User, 'password'>]?: User[Key]
  };
  // User[Key] - savybes tipas, bus toks, kaip User tipo savybe raktu Key

// keyof - skirtas gauti iteruojamu esamo tipo savybiu pavadinimus
// objekto savybe naudojant indeksa/rakta

type Product = {
  id: string | number;
  description: string,
  price: number,
}
type ProductPrice = Product['price']; // number
type ProductId = Product['id']; // string | number

// tipo savybiu aprasymas
type IterableObject = {
  [index: number]: any
}
type Dictionary = {
  [key: string]: string
};

// keyof
type User1 = {
  email: string,
  password: string,
  mobile: string,
readonly name: string,
  age: number,
  income: number,
  married?: boolean,
};

type UserStringified = {
  [key in keyof User1] : string
}

type UserPartial = {
  [key in keyof User1]?: User1[key]
}
type UserReadonly = {
  readonly [key in keyof User1]: User1[key]
}
type UserRequired = {
  [key in keyof User1]-?: User1[key]
}
type UserMutable = {
  -readonly [key in keyof User1]: User1[key]
}
// ts pagalbiniai tipai
type Car = {
  brand: string,
  model: string,
  gas: 'petrol' | 'dysel' | 'electric',
  hasRadio?: boolean,
};

type PartialCar = Partial<Car>; // Partial<Type> pavercia visas tipo savybes neprivalomomis
// Partial naudojamas sudarant tipa redagavimui

type RequiredCar = Required<Car>; // pavercia visas savybes privalomomis
// Required naudojamas filtruojant <Type> tipo elementus, kurie turi visas savybes, iskaitant neprivalomas

type Person0 = {
name: string,
surname: string,
};
type SetterFunction = (value: string) => void;
type PersonSetters = Record<keyof Person0, SetterFunction>;
// Record suformuoja objekto tipa pagal nurodytus Keys ir Value.
// naudojama norint pagal tipo savybes sukurti dictionary duomenu struktura, performuojant reiksmes

type User2 = {
    id: string,
    email: string,
    password: string,
    name: string,
    surname: string,
};
type User2Update = Omit<User2, 'id' | 'password'>;
// naudojamas formuojant naujus tipus is keliu tipu apart nereikalingu savybiu  
// arba formuojamas tipas siekiant saugoti atnaujinamas duomenu savybes

type CreateButton = (color: string, onClick: () => void,) => HTMLButtonElement;
type Button = ReturnType<CreateButton>;
// grazina funkcijos grazinimo tipa
// naudingas naudojant bibliotekas
// galima aprasyti tipa kintamajam, kurio reiksme bus grazinta kvieciant funcija

// ------------
interface SomeUser{
  name: string;
  id: string;
  email?: string | undefined;
  phone?: string;
}

const merge = (user: SomeUser, overrides: SomeUserOptionals): SomeUser => {
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

type SomeUserOptionals = Partial<SomeUser>;
type RequiredSomeUser = Required<SomeUser>;
type JustEmailAndName = Pick<SomeUser, 'email' | 'name'>;
type UserWithoutID = Omit<SomeUser, 'id'>;

// record
const mapById = (users: SomeUser[]): Record<SomeUser['id'], UserWithoutID> => {
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

//---
type MyFlexibleDogInfo = {
  name :string;
  [key: string]: string | number;
};

const dog: MyFlexibleDogInfo = {
  name: 'LG',
  breed: 'Mutt',
  age: 22,
};


// ---------------

  type Person = {
  readonly name: string,
  readonly surname: string,
  readonly sex: 'male' | 'female',
  age: number,
  income?: number,
  married?: boolean,
  hasCar?: boolean,
}

const people: Person[] = [
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
    surname: 'Piktutyt??',
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
    surname: 'Uostauskien??',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: 'Janina',
    surname: 'Stalautinskien??',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];

/*
  ??i?? u??duo??i?? tikslas ne tik i??spr??sti u??duotis, bet i??mokti kurti tipus pagal jau esan??ius tipus
  Pirmos 2 u??duotys pateikiamos kaip pavyzd??iai kaip tur??t?? b??t sprend??iami u??daviniai:
    * Apra??ome tipus
    * Apra??ome funkcijas
    * (jeigu reikia apra??ome naujus kintamuosius reikalingus sprendimui)
    * Atliekame u??duoties sprendim??
    * Spausdiname sprendimo rezultatus
  Visas funkcijas ir kintamuosius reikia apra??yti tipais (net jei to ir nereikalauja TS compiler'is)
*/
console.groupCollapsed('1. Sukurkite funkcij??, kuri paver??ia ??mogaus objekt?? -> {name: string, surname: string} objektu. Naudojant ??i?? funkcij?? performuokite vis?? ??moni?? masyv??');
{
  // Tipai:
  type Identity = {
    name: Person['name'],
    surname: Person['surname'],
  }

  // Funkcijos:
  const personToIdentity = ({ name, surname }: Person): Identity => {
    return { name, surname };
  };

  // Sprendimas:
  const identities: Identity[] = people.map(personToIdentity);

  // Spausdinimas:
  console.table(people);
  console.table(identities);
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite funkcij??, kuri paver??ia ??mogaus objekt?? -> {married: boolean, hasCar: boolean} objektu. Naudojant ??i?? funkcij?? performuokite vis?? ??moni?? masyv??.');
{
  // type TaskProps = {
  //   married: NonNullable<Person["married"]>,
  //   hasCar: NonNullable<Person["hasCar"]>,
  // }

  type TaskProps = Pick<Required<Person>, 'hasCar' | 'married'>;

  const selectTaskProps = ({ married, hasCar }: Person): TaskProps => ({
    married: Boolean(married),
    hasCar: Boolean(hasCar),
  });

  const result: TaskProps[] = people.map(selectTaskProps);

  console.table(people);
  console.table(result);
}
console.groupEnd();

console.group('3. Atspausdinkite objektus su vis?? ??moni?? vardais, pavard??m bei santuokos statusais');
{
  type TaskProps = {
    name: Person['name'],
    surname: Person['surname'],
    married: Person['married'],
  }

  const selectTaskProps = ({ name, surname, married }: Person): TaskProps => ({
    name, surname, married,
  });
  const result: TaskProps[] = people.map(selectTaskProps);

  console.log('people', people);
  console.log('result', result);
}
console.groupEnd();

console.group('4. Sukurtite masyv?? su lytimis ir u??dirbamu pinig?? kiekiu, pagal pradin?? ??moni?? masyv??');
{
  type TaskProps = {
    sex: Person['sex'],
    income: Person['income'],
  }

  const selectSexIncome = ({sex, income}: Person): TaskProps => ({
    sex, income,
  });
  const result: TaskProps[] = people.map(selectSexIncome);

  console.log('people', people);
  console.log('result', result);
}
console.groupEnd();

console.group('5. Sukurtite masyv?? su vardais, pavard??mis ir lytimi, pagal pradin?? ??moni?? masyv??');
{
  type TaskProps = {
    name: Person['name'],
    surname: Person['surname'],
    sex: Person['sex'],
  }

  const selectNamesSurnamesSex = ({name, surname, sex}: Person): TaskProps => ({
    name, surname, sex
  });
  const result: TaskProps[] = people.map(selectNamesSurnamesSex);

  console.log('people', people);
  console.log('result', result);
}
console.groupEnd();

console.group('6. Atspausdinkite visus vyrus');
{
  type Male = Omit<Person, 'sex'> & {
    sex: 'male',
  }

  const isMale = ({ sex }: Person): boolean => sex === 'male';

  const males: Male[] = people.filter(isMale) as Male[];

  console.log('people', people);
  console.log('males', males);
}
console.groupEnd();

console.group('7. Atspausdinkite visas moteris');
{
  type Male = Omit<Person, 'sex'> & {
    sex: 'female',
  }

  const isFemale = ({ sex }: Person): boolean => sex === 'female';

  const males: Male[] = people.filter(isFemale) as Male[];

  console.log('people', people);
  console.log('males', males);
}
console.groupEnd();

console.group('8. Atspausdinkite ??moni?? vardus ir pavardes, kurie turi ma??inas');
{
  type Identity = {
    name: Person['name'],
    surname: Person['surname'],
  }

  const personHasCar = ({ hasCar }: Person): boolean => Boolean(hasCar);

  const createIdentity = ({ name, surname }: Person): Identity => ({ name, surname });

  const identityReducer = (result: Identity[], { hasCar, name, surname }: Person): Identity[] => {
    if (hasCar) result.push({ name, surname });
    return result;
  };

  const peopleWithCars: Person[] = people.filter(personHasCar);
  const indentities: Identity[] = peopleWithCars.map(createIdentity);
  const identities2: Identity[] = people.reduce(identityReducer, []);

  console.log('people', people);
  console.log('indentities', indentities);
  console.log('identitiess2', identities2);
}
console.groupEnd();

console.group('9. Atspausdinkite ??mones kurie yra susituok??');
{
  type MarriedPerson = Omit<Person, 'married'> & {married: true};
  const marriedReducer = (result: MarriedPerson[], person: Person): MarriedPerson[] => {
    if (person.married) result.push(person as MarriedPerson);
    return result;
  };

  const marriedPeople: MarriedPerson[] = people.reduce(marriedReducer, []);

  console.log('people', people);
  console.log('marriedPeople', marriedPeople);
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objekt??, kuriame b??t?? apskai??iuotas vairuojan??i?? ??moni?? kiekis pagal lyt??');
// feat: 5-8-9 homework
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('11. Performuokite ??moni?? masyv??, jog kiekvieno ??mogaus savyb?? "income", tapt?? "salary"');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite ??moni?? masyv??, kuriame neb??t?? lyties, vardo ir pavard??s');
{
  
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite ??moni?? masyv??, kuriame "name" ir "surname" savyb??s, b??t?? pakeistos "fullname" savybe');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();