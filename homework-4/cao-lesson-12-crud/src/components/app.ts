import CarsCollection from '../helpers/cars-collection';
import cars from '../data/cars';
import brands from '../data/brands';
import models from '../data/models';

class App {
  private htmlElement: HTMLElement;

  private carsCollection: CarsCollection;

  constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);

    if (foundElement === null) throw new Error(`Nerastas 'App' elementas naudojant selektoriu: '${selector}'`);
    // sekmes atveju priskiriu reiksme
    this.htmlElement = foundElement;

    this.carsCollection = new CarsCollection({ brands, cars, models });
    console.log('carsCollection', this.carsCollection);
  }

  initialize = (): void => {
    const container = document.createElement('div');
    container.className = 'container my-5';

    container.innerHTML = 'Laukiu kol būsiu sukurtas';

    this.htmlElement.append(container);
  };
}

export default App;
