'use strict';

const router = require('express').Router();

const access = require('../auth/access');
const validate = require('./validate');
const controller = require('./controller');

router.get('/', access.user, controller.get);
router.post('/', access.user, validate, controller.add);
router.delete('/:id', access.user, controller.delete);

module.exports = router;