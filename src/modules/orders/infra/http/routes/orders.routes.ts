import { Router } from 'express';

import OrdersController from '../controller/OrdersController';

const ordersRouter = Router();
const ordersController = new OrdersController();

ordersRouter.post('/', ordersController.create);
ordersRouter.get('/:id', ordersController.show);
ordersRouter.get('/', ordersController.list);

export default ordersRouter;
