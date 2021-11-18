const express = require('express');
const router = express.Router();
const IocContainer = require("../config/registry");
const userController = IocContainer.resolve('userController');

router.post('/user/register', userController.createUser);

module.exports = router;
