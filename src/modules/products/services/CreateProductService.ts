import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Product from '../infra/typeorm/entities/Product';
import type {IProductsRepository} from '../repositories/IProductsRepository';

interface IRequest {
  name: string;
  price: number;
  quantity: number;
  barcode: string,
  description: string,
  expirationDate: Date,
}

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({ 
    name, 
    price, 
    quantity,
    barcode,
    description,
    expirationDate 
  }: IRequest): Promise<Product> {
    const productExists = await this.productsRepository.findByName(name);

    if (productExists) {
      throw new AppError('There is already one product with this name');
    }

    const product = await this.productsRepository.create({
      name,
      price,
      quantity,
      barcode,
      description,
      expirationDate
    });

    return product;
  }
}

export default CreateProductService;
