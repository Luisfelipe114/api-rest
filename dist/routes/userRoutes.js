"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const route = new (0, _express.Router)();

route.get('/', _loginRequired2.default, _UserController2.default.index); // lista todos os usuários
route.get('/:id', _UserController2.default.show); // lista um usuário

route.post('/', _UserController2.default.create);
route.put('/', _loginRequired2.default, _UserController2.default.update);
route.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = route;
