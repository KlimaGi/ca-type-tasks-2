import Product from '../types/product';
import Category from '../types/category';
import ProductCategory from '../types/product-category';
import ProductJoined from '../types/product-joined';

type ProductsCollectionProps = {
  products: Product[],
  categories: Category[],
  productsCategories: ProductCategory[]
};

class ProductsCollection {
  private props: ProductsCollectionProps;

  public constructor(props: ProductsCollectionProps) {
    this.props = JSON.parse(JSON.stringify(props));
  }

  public joinProduct(product: Product): ProductJoined {
    const categoriesIds = this.props.productsCategories
      .filter((productCategory) => productCategory.productId === product.id)
      .map((productCategory) => productCategory.categoryId);

    const categoryTitles = this.props.categories
      .filter((category) => categoriesIds.includes(category.id))
      .map((category) => category.title);

    const productJoined: ProductJoined = {
      ...product,
      categories: categoryTitles.join(', '),
    };

    return productJoined;
  }

  public get all(): ProductJoined[] {
    return this.props.products.map((product) => this.joinProduct(product));
    // return this.products.map(this.joinProduct.bind(this));
  }
}

export default ProductsCollection;
