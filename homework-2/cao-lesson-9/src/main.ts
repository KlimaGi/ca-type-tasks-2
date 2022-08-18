/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */


class Vehicle {
 protected brand: string;
 protected model: string;
 protected year: number;

  constructor(brand: string, model: string, year: number){
  this.brand = brand;
  this.model = model;
  this.year = year;
 }

 protected getString(): string {
  const {brand, model, year} = this;
  return `${brand} - ${model} - ${year}`;
 }
}

// 1. Sukurkite klasę WaterVehicle, kuri turėtų savybes: brand: string, model: string, year: number, maxDepth: number

class WaterVehicle extends Vehicle {
  maxDepth: number;

   constructor(brand: string, model: string, year: number, maxDepth: number){
    super(brand, model, year);
    this.maxDepth = maxDepth;
  }

  public override toString = (): string => {
    return `${this.getString()} maksimalus gylis: ${this.maxDepth}`
  }
};

// 2. Sukurkite klasę LandVehicle, kuri turėtų savybes: brand: string, model: string, year: number, tires: string[],

class LandVehicle extends Vehicle {
  tires: string[];

   constructor(brand: string, model: string, year: number, tires: string[]){
    super(brand, model, year);
    this.tires = tires;
  }

  public override toString = (): string => {
    return `${this.getString()} padangos: ${this.tires.join(', ')}`;
  }
} 

// 3. Sukurkite klasę AirVehicle, kuri turėtų savybes: brand: string, model: string, year: number, maxAltitude: number,

class AirVehicle extends Vehicle {
  maxAltitude: number;

   constructor(brand: string, model: string, year: number, maxAltitude: number){
    super(brand, model, year);
    this.maxAltitude = maxAltitude;
  }

  public override toString = (): string => {
    return `${this.getString()} aukstis: ${this.maxAltitude}`
  }
}

// * 4. Sukurkite klasę Vehicle ir padarykite ją tėvine [1.], [2.] ir [3.] punktais sukurtoms klasėms. 
// * 4.1 bendras savybes(brand, model, year) aprašykite su 'protected' pasiekiamumo lygiu. 
// * 4.2  perrrašykite visų klasių konstruktorius, jog bendros savybės (brand, model, year) būtų perduotos tėviniam konstruktoriui


// * 5. Vehicle klasėje aprašykite metodą 'public getString(): string' kuris suformuotų pagindinė informaciją(brand, model, year)

const landVehicle1 = new LandVehicle('minerva', 'ccc', 2019, ['Delux 200 m&s', 'Delux 200 m&s', 'Delux 200 m&s','Delux 200 m&s']);
console.log('landVehicle1', landVehicle1);

// * 6. Vehicle klasėje pakeiskite metodą 'public getString(): string' į 'PROTECTED getString(): string'. 
// * Kiekvienoje paveldinčioje klasėje sukurkite metodus 'public toString(): string', kurios naudotų tėvinės klasės metodus metodą 'PROTECTED getString(): string' tam kad suformuoti pilną savosios klasės reprezentaciją

const airVehicle1 = new AirVehicle('air-minerva', 'fly', 2021, 2);
console.log('airVehicle1', airVehicle1);

const waterVehicle1 = new WaterVehicle('water-minerva', 'weee', 2018, 2);
console.log('waterVehicle1', waterVehicle1);

// feat: 5-8-9 homework

// 7. Tėvinės klasės Vehicle konstruktoriaus parametrus aprašykite objektu, ir perrašykite vaikinių klasių konstruktorius.

// 8. Išskaidykite kodą atskirais failais

