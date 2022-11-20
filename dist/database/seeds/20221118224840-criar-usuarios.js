"use strict";// 'use strict';
const bcryptjs = require('bcryptjs');

// const { password } = require('../../config/database');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'John Doe',
          email: 'john1@gmail',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John Doe2',
          email: 'john2@gmail',
          password_hash: await bcryptjs.hash('1231246', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John Doe3',
          email: 'john3@gmail',
          password_hash: await bcryptjs.hash('122456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down() {

  },
};

/*
A quem interessar, popular a base de dados com a devDependency faker é massa!

1. Incluir no package.json, em devDependencies:
"faker": "^5.5.3"

2. Intalar o pacote:
$ npm i

3. Popular a base de dados com dados fake:

//seed de usuários:

const bcryptjs = require("bcryptjs");
const faker = require("faker");

module.exports = {
  up: async (queryInterface) => {
    let dummyJSON = [];
    for (let i = 0; i < 10; i++) {
      dummyJSON.push({
        nome: faker.name.firstName(),
        sobrenome: faker.name.lastName(),
        email: faker.internet.email(),
        password_hash: await bcryptjs.hash(faker.internet.password(), 8),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }
    await queryInterface.bulkInsert("users", dummyJSON, {});
  },

  down: async () => {
    await queryInterface.bulkDelete("users", null, {});
  },
};

4. Executar a seed:
$ npx sequelize db:seed:all

*/
