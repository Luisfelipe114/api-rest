import { Router } from 'express';

import fotoController from '../controllers/FotoController';

const route = new Router();

route.post('/', fotoController.store);

export default route;
