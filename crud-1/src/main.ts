// import App from './components/app';

// const app = new App('#root');
// app.initialize();

import ProductsCollection from './helpers/products-collection';
import products from './data/products';
import categories from './data/categories';
import productsCategories from './data/products-categories';

const productsCollection = new ProductsCollection({ products, categories, productsCategories });

console.log('productsCollection.all', productsCollection.all);
