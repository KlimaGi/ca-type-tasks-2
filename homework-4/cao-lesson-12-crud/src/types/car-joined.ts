import Brand from './brand';
import Car from './car';
import Model from './model';

// visi elementai is Car, iskyrus modelId, & brand is brand'o, model os model'io. Tokiu busu igyvendinama task 1 
type CarJoined = Omit<Car, 'modelId'> & {
  brand: Brand['title'],
  model: Model['title'],
};

export default CarJoined;
