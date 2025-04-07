import { Router } from 'express';
import AuthenticatController from '../controller/authenticatController';


const sessionsRouter = Router();
const sessionsController = new AuthenticatController();

sessionsRouter.post('/sessions', sessionsController.create);

export default sessionsRouter;
