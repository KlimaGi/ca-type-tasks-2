"use strict";
class Vehicle {
    brand;
    model;
    year;
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getString() {
        const { brand, model, year } = this;
        return `${brand} - ${model} - ${year}`;
    }
}
class WaterVehicle extends Vehicle {
    maxDepth;
    constructor(brand, model, year, maxDepth) {
        super(brand, model, year);
        this.maxDepth = maxDepth;
    }
    toString = () => {
        return `${this.getString()} maksimalus gylis: ${this.maxDepth}`;
    };
}
;
class LandVehicle extends Vehicle {
    tires;
    constructor(brand, model, year, tires) {
        super(brand, model, year);
        this.tires = tires;
    }
    toString = () => {
        return `${this.getString()} padangos: ${this.tires.join(', ')}`;
    };
}
class AirVehicle extends Vehicle {
    maxAltitude;
    constructor(brand, model, year, maxAltitude) {
        super(brand, model, year);
        this.maxAltitude = maxAltitude;
    }
    toString = () => {
        return `${this.getString()} aukstis: ${this.maxAltitude}`;
    };
}
const landVehicle1 = new LandVehicle('minerva', 'ccc', 2019, ['Delux 200 m&s', 'Delux 200 m&s', 'Delux 200 m&s', 'Delux 200 m&s']);
console.log('landVehicle1', landVehicle1);
const airVehicle1 = new AirVehicle('air-minerva', 'fly', 2021, 2);
console.log('airVehicle1', airVehicle1);
const waterVehicle1 = new WaterVehicle('water-minerva', 'weee', 2018, 2);
console.log('waterVehicle1', waterVehicle1);
//# sourceMappingURL=main.js.map