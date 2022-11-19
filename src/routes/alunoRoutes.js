import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

import loginRequired from '../middlewares/loginRequired';

const route = new Router();

route.get('/', alunoController.index);
route.post('/', loginRequired, alunoController.create);
route.put('/:id', loginRequired, alunoController.update);
route.delete('/:id', loginRequired, alunoController.delete);
route.get('/:id', alunoController.show);

export default route;
