'use strict';

const router = require('express').Router();

const validate = require('./validate');
const controller = require('./controller');

router.post('/signup', validate, controller.signup);
router.post('/login', validate, controller.login);

module.exports = router;