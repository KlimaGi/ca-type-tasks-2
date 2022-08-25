import ProductsCollection from "../helpers/products-collection";
import products from '../data/products';
import categories from '../data/categories';
import productsCategories from '../data/products-categories';

class App {
  private htmlElement: HTMLElement;

  private productsCollection: ProductsCollection;

  constructor(selector: string) {
    const foundHtmlElement = document.querySelector<HTMLElement>(selector);
    if (foundHtmlElement === null) {
      throw new Error(`Kuriant 'App' komponenta nerastas HTML elementas naudojant selectoriu: '${selector}'`);
    }

    this.htmlElement = foundHtmlElement;
    this.productsCollection = new ProductsCollection(products, categories, productsCategories);

    // TODO: istrinti
    console.log(this.htmlElement, this.productsCollection);
  }
}

export default App;