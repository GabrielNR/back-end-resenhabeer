import { getRepository, Repository } from 'typeorm';

import {IOrdersRepository} from '@modules/orders/repositories/IOrdersRepository';
import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO';
import Order from '../entities/Order';

class OrdersRepository implements IOrdersRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  public async create({ /*customer,*/ products }: ICreateOrderDTO): Promise<Order> {
    const order = this.ormRepository.create({
      // customer,
      order_products: products,
    });

    await this.ormRepository.save(order);

    return order;
  }

  public async findById(id: string): Promise<Order | undefined> {
    const order = this.ormRepository.findOne(id, {
      relations: ['order_products', 'customer'],
    });

    return order;
  }

  async list(): Promise<Order[]> {
    const orders = await this.ormRepository.find({
      relations: ['order_products']
    });
    return orders;
  }
}

export default OrdersRepository;
