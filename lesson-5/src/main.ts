/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-inner-declarations */

// ----------- record

type Product = {
  id: string,
  title: string, 
  price: number,
  amount: number,
}
type ProductCategory = 'Food' | 'Clothes' | 'Other';

type Catalog = Record<ProductCategory, Product[]>;
// -----

type Properties = 'propA' | 'propB';
// simple type
// type MyMappedType = {
//   [P in Properties] : P;
// };

// generic type
// type MyMappedType<Properties extends string | number | symbol> = {
//   [P in Properties] : P;
// };
// new type from generic
//type MyNewType = MyMappedType<'propA' | 'propB'>;

// take whole type instead generic
type MyMappedType<T> = {
  [P in keyof T] : T[P];
};
type MyNewType = MyMappedType<{a: 'a', b: 'b'}>
// ----------
type Pick1<T, Properties extends keyof T> = {
  [P in Properties]: T[P];
};

type MyNewType2 = Pick1<{a: 'a', b: 'b', c: 'c'}, 'a' | 'c'>;

type Record1<K extends keyof any, T> ={
  [P in K]: T;
};
//const someRecord: Record1<string, number> = {};
const someRecord: Record2 = {};

someRecord.apples = 10;
someRecord.oranges = 10;

interface Record2 {
  [key: string]: number;
}



/*
  Užduočių atlikimo eiga:
  * Pirmiausiai perskaitykite visą užduotį:
  * Klauskite dėstytojo užduoties paaiškinimo, jeigu užduotis nėra aiški.
  * Galvoje susidarytkite sprendimo planą:
    * Kaip atliksiu užduotį? Galbūt verta pasibraižyti sprendimo idėją ant lapelio?
    * Kokių tipų reikės? Parametrų tipai, rezultatų tipai, funkcijų tipai.
    * Kaip aiškiai ir tvarkingai pateiksiu rezultatus?
  * Bandykite atlikti užduotį:
    * Pavyko:
      * Atspausdinkite rezultatus ir/arba veikimo pavyzdžius
      * Pabandykite patobulinti savo kodą:
        * pabandykite aiškiau aprašyti kintamųjų/tipų pavadinimus
        * sužiūrėkite ar tikrai naudojate vieningą sintaksę
      * Palyginkite savo sprendimą su užuočių atsakymų failu.
      * Suformuokite klausimus dėstytojui, pagal sprendimų skirtumus
    * Nepavyko:
      * pažiūrėkite atsakymų failą ir PO VIENĄ EILUTĘ nusirašykite sprendimą
      * rašant kiekvieną eilutę smulkmeniškai suformuokite klausimus.
    * Spręskite kitus uždavinius, o kai dėstytojas aiškins užduoties sprendimą, klausykitės
      * Po dėstytojo sprendimo ir aiškinimo užduokite klausimus, kurių vis dar nesuprantate.
  Patarimai:
    * Paspauskite komandą: ALT + Z - tai padės lengviau skaityti užduočių tekstą
    * Nežiūrėkite į atsakymų failus anksčiau laiko.
      jūsų tikslas lavinti inžinerinį mąstymą, o ne atlikti užduotis.
    * Nesedėkite prie kompiuterio ilgiau nei 1 val iš eilės, darykite pertraukas po 10 min
    * Klauskite visko ko nesuprantate. Neklausdami eikvojat savo laiką, kurį šie kursai taupo.
      Gerbiat savo laiką - gerbiat save.
    * Kodo tvarka ir aiškumas tiek pat svarbūs kiek funkcionalumas. Išmoksite tai dabar,
      arba kuomet negausite darbo dėl netvarkingo kodo.
    * Atlikę užduotį, užduokite sau klausimą: "Ar tai geriausia ką galėjau?"
    * Įsigilinimas jūsų žinias iš supratimo perkelia į suvokimą. Tik suvokiant dalykus, galite
      žinias pritaikyti kūrybiškai. Iš to seka, kad užduoties atlikimo kokybė >>> užduočių kiekis
    * Užduočių rezultatų pateikimas tike pat svarbus, kiek sprendimas.
*/

// 15 min
console.group('1. Tipų indeksai');
{
  type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string,
      },
    };
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string,
    }
  };

  const users: User[] = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        geo: {
          lat: '-43.9509',
          lng: '-34.4618',
        },
      },
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains',
      },
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      address: {
        street: 'Douglas Extension',
        suite: 'Suite 847',
        city: 'McKenziehaven',
        zipcode: '59590-4157',
        geo: {
          lat: '-68.6102',
          lng: '-47.0653',
        },
      },
      phone: '1-463-123-4447',
      website: 'ramiro.info',
      company: {
        name: 'Romaguera-Jacobson',
        catchPhrase: 'Face to face bifurcated interface',
        bs: 'e-enable strategic applications',
      },
    },
  ];

  // 10 min
  console.group('1.1. Sukurkite tipą Address naudodami tipą User. Parašykite funkciją "getUserAddress", kuri priima vartotoją (User) ir grąžina vartotojo adresą (Address)');
  {
//User[] => Array.prototype.map(getUserAddress) => Adress[];
type Address = User['address'];
const getUserAddress = ({address}: User) : Address => address;

const addresses: Address[] = users.map(getUserAddress);

console.log('addresses', addresses);
  }
  console.groupEnd();

  // 5 min
  console.group('1.2. Sukurkite tipą Company naudodami tipą User. Parašykite funkciją "getUserCompany", kuri priima vartotoją (User) ir grąžina vartotojo kompaniją (Company)');
    {
      type Company = User['company'];
      const getUserCompany = ({company}: User) : Company => company;
      const companies: Company[] = users.map(getUserCompany);

      console.log('companies',companies);
    }
    console.groupEnd();
  }
console.groupEnd();

// 25 min
console.group('2. Pagalbiniai tipai');
{
  type BMWCar = {
    brand: 'BMW',
    model: 'X1' | 'X2' | 'X3' | 'X4' | 'X5',
    make: number,
    color?: string,
    engine: 'electric' | 'hybrid',
  };

  const cars: BMWCar[] = [
    {
      brand: 'BMW', model: 'X1', make: 2000, color: 'black', engine: 'electric',
    },{
       brand: 'BMW', model: 'X2', make: 2001, engine: 'hybrid', 
    },{
     brand: 'BMW', model: 'X3', make: 2002, color: 'red', engine: 'hybrid',
    },{ 
      brand: 'BMW', model: 'X4', make: 2003, engine: 'electric',
    },
  ];

  // 10 min
  console.group('2.1. Sukurkite funkciją "selectWithColor" kuri atrenka visas mašinas turinčias aprašytą spalvą, ir aprašykite joms tipą BMWCarFull su visomis privalomomis savybėmis');
  {
    type BMWCarFull = Required<BMWCar>;
    const selectWithColor = (allCars: BMWCar[], color: string): BMWCarFull[] => {
    const filteredCars = allCars.filter((car) => car.color === color) as BMWCarFull[];

    return filteredCars;
    }
    const redCars = selectWithColor(cars, 'red');
    const BlackCars = selectWithColor(cars, 'black');

    console.log('redCars, blackCars', {
      redCars, BlackCars
    });
  }
  console.groupEnd();

  // 15 min
  console.group('2.2. Sukurkite funkciją "refactorBmwCar" kuri perkuria mašiną.  Pašalina mašinos savybė brand, o model savybę pakeičia taip, kad joje būtų markė ir modelis atskirta tarpu. Visos kitos savybės paliekamos tokios pat');
  {

    type BMWCarRefactored = Omit<BMWCar, 'brand' | 'model'> & {
      model: `${BMWCar['brand']} ${BMWCar['model']}`
    };

    const refactorCar = ({brand, model, ...rest}: BMWCar): BMWCarRefactored => {
      return ({
        model: `${brand} ${model}`,
        ...rest
      });
    } 

    const refactorBmwCar = cars.map(refactorCar);

    console.log('refactorBmwCar', refactorBmwCar);

//2.2. improvization
{
    type BMWCarRefactored2 = Omit<BMWCar, 'model' | 'engine'> & {model : `${BMWCar['model']} ${BMWCar['engine']}`};

    const refactorCar2 = ({model, engine, ...rest}: BMWCar): BMWCarRefactored2 => {
      return ({
        model: `${model} ${engine}`,
        ...rest
      });
    }
    const refactorBmwCar2 = cars.map(refactorCar2);
    console.log('refactorBmwCar2', refactorBmwCar2);
}

    // pvz
    type NameLt = 'Pienius' | 'Serbentas' | 'Kliaudas' | 'Verundis';
    type SurnameLT = 'Kelpokas' | 'Bauda' | 'Penktokas';

    type FullNameLt = `${NameLt} ${SurnameLT}`;
   
  }
  console.groupEnd();
}
console.groupEnd();

// 30 min
console.group('3. Tipų apjungimas ir “&” sankirtos operatorius');
{
  type User = {
    email: string,
    password: string,
    name?: string,
    surname?: string,
    image?: string,
    cartItems: string[],
  };

  // 30 min
  console.group('3.1. Sukurkite tipą UserRegistration naudodami tipą User. UserRegistration tipas turi turėti papildomas ir privalomas savybes emailConfirmation ir passwordConfirmation, bei pašalintą savybę cartItems. Sukūrus tipą UserRegistration sukurkite funkciją "registerUser" kuri priimtų UserRegistration tipo parametrą ir grąžintų User tipo objektą, jeigu sutampa email su emailConfirmation ir password su passwordConfirmation. Jeigu pakartotinės savybės nesutampa turi būti grąžinama "null" reikšmė');
  /* Hints:
    * Omit<Type, Keys>
    * X extends Y || &
    * Type index'es
  */
  {

type UserRegistration = Omit<User, 'carItems'> & {
  emailConfirmation: User['email'], passwordConfirmation : User['password'],
}

const registerUser = ({
  email, 
  emailConfirmation, 
  password, 
  passwordConfirmation, 
  ...userProps
}: UserRegistration): User | null => {
if(email === emailConfirmation && password === passwordConfirmation){
  return {
    ...userProps,
    email,
    password,
    cartItems: []
  };
}
return null;
}

const userRegistrationValid: UserRegistration = {
  surname: 'Zul',
  email: 'zul@zul.com',
  emailConfirmation: 'zul@zul.com',
  password: 'tarzanas123',
  passwordConfirmation: 'tarzanas123',
};
const userRegistrationNotValid: UserRegistration = {
  surname: 'Bea',
  email: 'bea@bea.com',
  emailConfirmation: 'bea@bea.com',
  password: 'cubicPow',
  passwordConfirmation: 'cubicPo',
};

console.log('Registration atempt: ', JSON.stringify(userRegistrationValid, null, 4));
const registrationResult1 = registerUser(userRegistrationValid);
console.log('Result:', registrationResult1);

console.log('Registration atempt: ', JSON.stringify(userRegistrationNotValid, null, 4));
const registrationResult2 = registerUser(userRegistrationNotValid);
console.log('Result:', registrationResult2);


  }
  console.groupEnd();
}
console.groupEnd();

// 50 min
console.group('4. Tipų susaistymas');
{
  type Accommodation = {
    address: string,
    squares: number,
    type: 'Flat' | 'House' | 'Cottage',
  }

  type AccomodationSetters = {
    [Key in keyof Accommodation as `set${Capitalize<Key>}`]: (value: Accommodation[Key]) => void
  }
type AccomodationGetters = {
    [Key in keyof Accommodation as `get${Capitalize<Key>}`]: () => Accommodation[Key]
  }

  type EncapsulatedAccomodation = AccomodationSetters & AccomodationGetters;


  // 50 min
  console.groupCollapsed('4.1. Turite tipą Accomodation, jo visos savybės yra pasiekiamos ir keičiamos tiesiogiai. Naudodami saistymo metodologiją sukurkite tipą EncapsulatedAccomodation. Panaudokite kiekvieną Accomodation tipo savybę, kad performuoti ją į setterio ir getterrio funkcijų poras. Sukūrę tipą, aprašykite funkciją "encapsulateAccomodation", kuri priimtų Accomodation tipo parametrą ir grąžintų EncapsulatedAccomodation objektą su veikiančiais setteriais ir getteriais.');
  /* Hints:
     * TS: mapped types
     * TS: keyof operator
     * TS: Key Remapping via "as"
     * TS: index Types
     * TS: intersection operator &
     * JS: lexical scope
     * OOP: encapsulation
   */
  {
    const encapsulateAccomodation = ({
      address,
      squares,
      type
    }: Accommodation): EncapsulatedAccomodation => ({
      setAddress: (value) => {address = value},
      setSquares: (value) => {squares = value},
      setType: (value) => {type = value},
      getAddress: () => address,
      getSquares: () => squares,
      getType: () => type,
    });

    




  }
  console.groupEnd();
}
console.groupEnd();