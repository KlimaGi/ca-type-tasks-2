import Brand from '../types/brand';
import Car from '../types/car';
import Model from '../types/model';

type CarsCollectionProps = {

};


// private, nes inkapsuliacijos esme klasės objektų savybių pasiekiamumas turi būti ribojamas.pasiekiamos turėtų būti tik tos savybės ar metodai, kurie užtikrina objekto korektiškumo išlaikymą. 
class CarsCollection {
  constructor(
    private brand: Brand[],
    private car: Car[],
    private model: Model[],
  ) { }

  private joinCar(car: Car): {

  }
}

export default CarsCollection;
