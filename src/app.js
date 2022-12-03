import dotenv from 'dotenv';

import { resolve } from 'path';

dotenv.config();

import './database';

import cors from 'cors';

import helmet from 'helmet';

import express from 'express';

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

const whiteList = [
  'http://localhost:3000',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by cors'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.config();
    // this.middlewares();
    this.routes();
  }

  config() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({
      extended: true,
    })); // para o POST funcionar
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'uploads')));
  }

  /*
  middlewares() {

  }
  */

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;
