'use strict';

const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/products', require('./products'));

module.exports = router;