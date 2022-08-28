// import App from './components/app';

// const app = new App('#root');
// app.initialize();

import CarsCollection from './helpers/cars-collection';
import cars from './data/cars';
import brands from './data/brands';
import models from './data/models';

const carsCollection = new CarsCollection({ brands, cars, models });
console.log('carsCollection', carsCollection);
