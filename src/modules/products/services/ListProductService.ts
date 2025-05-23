import { injectable, inject } from 'tsyringe';
import type {IProductsRepository} from '../repositories/IProductsRepository';
import Product from '../infra/typeorm/entities/Product';

@injectable()
class ListProductsService{
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  async execute(): Promise<Product[]> {
    const products = await this.productsRepository.list();
 
    return products
  }
}

export { ListProductsService}