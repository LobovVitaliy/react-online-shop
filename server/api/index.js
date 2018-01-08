'use strict';

const router = require('express').Router();

router.use('/products', require('./products'));
router.use('/cart', require('./cart'));
router.use('/users', require('./users'));

module.exports = router;