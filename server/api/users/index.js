'use strict';

const router = require('express').Router();

const access = require('./access');
const validate = require('./validate');
const controller = require('./controller');

router.post('/signup', validate.auth, controller.signup);
router.post('/login', validate.auth, controller.login);

// for admin
router.get('/', access.admin, controller.get);
router.post('/', access.admin, validate.create, controller.signup);
router.put('/:id', access.admin, validate.update, controller.update);
router.delete('/', access.admin, validate.delete, controller.delete);

module.exports = router;