import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateProductService from '@modules/products/services/CreateProductService';
import { ListProductsService } from '@modules/products/services/ListProductService';

export default class ProductsController {
  public async list(request: Request, response: Response): Promise<Response> {
    const listProductsService = container.resolve(ListProductsService)
    const all = await listProductsService.execute()

    return response.json(all)
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { 
      name, 
      price, 
      quantity,  
      barcode,
      description,
      expirationDate 
    } = request.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      name,
      price,
      quantity,
      barcode,
      description,
      expirationDate
    });

    return response.json(product);
  }
}
