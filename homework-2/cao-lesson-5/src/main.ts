// tipu formavimas ir susaistymas

type User = {
    email: string,
    password: string,
    mobile: string,
    name: string,
    surname: string,
    gender: 'male' | 'female',
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


const merge = (user: SomeUser, overrides:SomeUserOptionals): SomeUser => 
return {
  ...user,
  ...overrides
};

console.log('merge', merge(
  { name: 'Jack',
  id: 'foo',
  email: 'some@some.com',
  },{
  email: 'somebazz@some.com'
  }));

type SomeUserOptionals = Partial<SomeUser>;
type RequiredSomeUser = Required<SomeUser>;
type JustEmailAndName = Pick<SomeUser, 'email' | 'name'>;



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

/*
  Šių užduočių tikslas ne tik išspręsti užduotis, bet išmokti kurti tipus pagal jau esančius tipus
  Pirmos 2 užduotys pateikiamos kaip pavyzdžiai kaip turėtų būt sprendžiami uždaviniai:
    * Aprašome tipus
    * Aprašome funkcijas
    * (jeigu reikia aprašome naujus kintamuosius reikalingus sprendimui)
    * Atliekame užduoties sprendimą
    * Spausdiname sprendimo rezultatus
  
  Visas funkcijas ir kintamuosius reikia aprašyti tipais (net jei to ir nereikalauja TS compiler'is)
    
*/
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
  // Tipai:
  type Identity = {
    name: Person["name"],
    surname: Person["surname"],
  }

  // Funkcijos:
  const personToIdentity = ({ name, surname }: Person): Identity => {
    return { name, surname };
  }

  // Sprendimas:
  const identities: Identity[] = people.map(personToIdentity);

  // Spausdinimas:
  console.table(people);
  console.table(identities);
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
  // type TaskProps = {
  //   married: NonNullable<Person["married"]>,
  //   hasCar: NonNullable<Person["hasCar"]>,
  // }

  type TaskProps = Pick<Required<Person>, "hasCar" | "married">;

  const selectTaskProps = ({ married, hasCar }: Person): TaskProps => ({
    married: Boolean(married),
    hasCar: Boolean(hasCar),
  });

  const result: TaskProps[] = people.map(selectTaskProps);

  console.table(people);
  console.table(result);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  type MarriedPerson = Omit<Person, 'married'> & {married: true};

}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();