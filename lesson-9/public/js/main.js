"use strict";
console.group('1. Sukurkite klasę tėvinę Person vaikinėms klasėms ir išsaugokite joje bendrą funkcionalumą.');
{
    class Person {
        static count = 0;
        namePrivate;
        surnamePrivate;
        id;
        constructor(name, surname) {
            Person.count += 1;
            this.id = `Person_${Person.count}`;
            this.name = name;
            this.surname = surname;
        }
        set name(value) {
            this.namePrivate = value;
        }
        set surname(value) {
            this.surnamePrivate = value;
        }
        get fullname() {
            return `${this.namePrivate} ${this.surnamePrivate}`;
        }
    }
    class Student extends Person {
        marks;
        constructor() {
            super();
            this.marks = [];
        }
        addMark(mark) {
            if (mark < 1)
                throw new Error('Pazimys turi buti didesnis nei 1');
            if (mark > 10)
                throw new Error('Pazimys turi buti mazesnis nei 10');
            if (mark % 1 !== 0)
                throw new Error('Pazimys turi buti sveikas skaicius');
            this.marks.push(mark);
        }
    }
    class Lecturer extends Person {
        static MIN_SALARY = 1800;
        static MAX_SALARY = 4400;
        static GPM_PERC = 0.20;
        static PSD_PERC = 0.0698;
        static VSD_PERC = 0.1252;
    }
    const people = [
        new Person('Markas', 'Byla'),
        new Person('Leja', 'Tyla'),
    ];
    console.group('1.1. Sukurkite klasę Person, kurios objektams būtų galima priskirti vardą ir pavardę. Šios klasės objektams turi susigeneruoti id - unikalus raktas. Taip pat sukurkite get"erį fullname, kuris grąžina vardą ir pavardę atskirtus tarpu. Atspausdinkite kelis šios klasės objektus, ir pademonstruokite get"erio veikimą.');
    {
        console.log('people', people);
        people.forEach((p) => console.log(p.fullname));
    }
    console.groupEnd();
    console.group('1.2. Sukurkite klasę Student, kuri paveldėtų klasę Person. Be Person klasės paveldimų savybių, klasę Student turi turėti savybę "marks", kurioje bus saugomi studento pažymiai. Konstruktoriaus vykdymo metu, "marks" reikšmei turi būti sukuriamas tuščias masyvas. Student klasėje sukurkite metodą "addMark" kuris leistų įdėti naują pažymį - sveiką skaičių nuo 1 iki 10. Taip pat sukurkite get"erį "avg", kuris skaičiuotų studento vidurkį pagal esamus pažymius. Sukurkite bent 2 Student klasės objektus ir atspausdinkite visus get"erius ir pavaizduokite metodų funkcionalumą konsolėje.');
    {
    }
    console.groupEnd();
    console.group('1.3. Sukurkite klasę Lecturer, kuri paveldėtų klasę Person. Papildomai klasei Lecturer sukurkite savybę "salary", kuri privalo būti priskirta objekto sukūrimo metu. Inkapsuliuokite savybę "salary" taip, kad ji galėtų būti skaičius nuo 1800 iki 4400 su ne daugiau nei 2 skaičiais po kablelio. Taip pat sukurkite get"erį "salaryNeto", kuris atspausdintų suapvalintą atlyginimą iki sveikų skaičių atskaičiavus mokesčius: GPM 20%, PSD 6.98%, VSD 12.52%. Sukurkite bent 2 Lecturer klasės objektus ir atspausdinkite visus get"erius konsolėje.');
    {
    }
    console.groupEnd();
    console.group('1.4. Sukurkite viešai [1.] užduočiai pasiekiamą masyvą "allPeople". [1.1], [1.2] ir [1.3] užduotyse sukurtus objektus įdėkite į šį masyvą. Atspausdinkite visų žmonių elementų "fullname"');
    {
    }
}
console.groupEnd();
//# sourceMappingURL=main.js.map