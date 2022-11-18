import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';

import homeRoutes from './src/routes/homeRoutes';

import userRoutes from './src/routes/userRoutes';

import tokerRoutes from './src/routes/tokenRoutes';

class App {
  constructor() {
    this.app = express();
    this.config();
    this.middlewares();
    this.routes();
  }

  config() {
    this.app.use(express.urlencoded({
      extended: true,
    })); // para o POST funcionar
    this.app.use(express.json());
  }

  middlewares() {

  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokerRoutes);
  }
}

export default new App().app;
