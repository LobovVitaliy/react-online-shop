'use strict';

const router = require('express').Router();

const access = require('../users/access');
const validate = require('./validate');
const controller = require('./controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);

// for admin
router.post('/', access.admin, validate, controller.create);
router.put('/:id', access.admin, validate, controller.update);
router.delete('/:id', access.admin, controller.delete);

module.exports = router;