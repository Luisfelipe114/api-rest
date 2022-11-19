import { Router } from 'express';

import fotoController from '../controllers/FotoController';

import loginRequired from '../middlewares/loginRequired';

const route = new Router();

route.post('/', loginRequired, fotoController.store);

export default route;
