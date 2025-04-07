import { Router } from 'express';
import customersRouter from '@modules/customers/infra/http/routes/customers.routes';
import productsRouter from '@modules/products/infra/http/routes/products.routes';
import ordersRouter from '@modules/orders/infra/http/routes/orders.routes';
import usersRouter from '@modules/accounts/infra/http/routes/users.routes';
import sessionsRouter from '@modules/accounts/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/customers', customersRouter);
routes.use('/products', productsRouter);
routes.use('/orders', ordersRouter);
routes.use('/users', usersRouter);
routes.use(sessionsRouter);

export default routes;
