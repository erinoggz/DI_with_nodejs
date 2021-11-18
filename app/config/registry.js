const IocContainer = require("./ioc-container");
const turboLogger = require('turbo-logger').createStream({});
const UserService = require('../services/user');
const UserController = require('../controllers/user');

IocContainer.register('logger',[],turboLogger);
IocContainer.register('userService',[],UserService);
IocContainer.register('userController',['userService'],UserController);

module.exports = IocContainer;