import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

const route = new Router();

route.get('/', alunoController.index);

export default route;
