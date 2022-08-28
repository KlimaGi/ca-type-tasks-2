import Brand from '../types/brand';
import Car from '../types/car';
import Model from '../types/model';
import CarJoined from '../types/car-joined';

type CarsCollectionProps = {
  brands: Brand[],
  cars: Car[],
  models: Model[],
};


// private, nes inkapsuliacijos esme klasės objektų savybių pasiekiamumas turi būti ribojamas.pasiekiamos turėtų būti tik tos savybės ar metodai, kurie užtikrina objekto korektiškumo išlaikymą. 
class CarsCollection {
  private props: CarsCollectionProps;

  constructor(props: CarsCollectionProps) {
    this.props = props;
  }

  private joinCar = ({ modelId, ...car }: Car) => {
    const { brands, models } = this.props;
    const carModel = models.find((model) => model.id === modelId);
    const carBrand = brands.find((brand) => brand.id === carModel?.brandId);

    return {
      ...car,
      brand: (carBrand && carBrand.title) ?? 'unknown',
      model: (carModel && carModel.title) ?? 'unknown',
    };
  };

  public get all(): CarJoined[] {
    return this.props.cars.map(this.joinCar);
  }
}

export default CarsCollection;
