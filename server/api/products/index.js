'use strict';

const router = require('express').Router();

const access = require('../users/access');
const validate = require('./validate');
const controller = require('./controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);

// for admin
router.post('/', access.admin, validate.create, controller.create);
router.put('/:id', access.admin, validate.update, controller.update);
router.delete('/', access.admin, validate.delete, controller.delete);

module.exports = router;