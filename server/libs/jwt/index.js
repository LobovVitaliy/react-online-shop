const jwt = require('jsonwebtoken');
const { secret, options } = require('../../config/settings').jwt;

module.exports = {
    sign: (payload) => jwt.sign(payload, secret, options)
};