import { injectable, inject } from 'tsyringe';
import type {IOrdersRepository} from '../repositories/IOrdersRepository';
import Order from '../infra/typeorm/entities/Order';

@injectable()
class ListOrdersService {
  constructor(
    @inject("OrdersRepository")
    private ordersRepository: IOrdersRepository
  ) {}

  async execute(): Promise<Order[]> {
    const products = await this.ordersRepository.list();
 
    return products
  }
}

export { ListOrdersService }