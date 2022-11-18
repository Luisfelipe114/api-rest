import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const route = new Router();

route.get('/', loginRequired, userController.index); // lista todos os usuários
route.get('/:id', userController.show); // lista um usuário

route.post('/', userController.create);
route.put('/:id', userController.update);
route.delete('/:id', userController.delete);

export default route;
