import ProductsCollection from '../helpers/products-collection';
import products from '../data/products';
import categories from '../data/categories';
import productsCategories from '../data/products-categories';
import Table from './table';
import stringifyPropValues from '../helpers/stringify-prop-values';
import ProductJoined from '../types/product-joined';

type ProductTableRow = [string, string, string, string, string];

const formatProductTableRow = (product: ProductJoined): ProductTableRow => {
  const {
    id, title, price, description, categories: categoryString,
  } = stringifyPropValues(product);

  return [id, title, price, description ?? '', categoryString];
};

class App {
  private htmlElement: HTMLElement;

  private productsCollection: ProductsCollection;

  private productsTable: Table<ProductTableRow>;

  constructor(selector: string) {
    const foundHtmlElement = document.querySelector<HTMLElement>(selector);
    if (foundHtmlElement === null) {
      throw new Error(`Kuriant 'App' komponenta nerastas HTML elementas naudojant selectoriu: '${selector}'`);
    }

    this.htmlElement = foundHtmlElement;
    this.productsCollection = new ProductsCollection({ products, categories, productsCategories });

    console.log('productsCollection.all', productsCollection.all);

    this.productsTable = new Table({
      title: 'Visi produktai',
      columns: ['Id', 'Pavadinimas', 'Kaina', 'Aprasymas', 'Kategorijos'],
      rowsData: this.productsCollection.all.map(formatProductTableRow),
    });
  }

  public initialize() {
    const container = document.createElement('div');
    container.className = 'container mt-5';
    container.append(this.productsTable.htmlElement);

    this.htmlElement.append(container);
  }
}

export default App;
