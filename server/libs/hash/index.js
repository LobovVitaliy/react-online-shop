'use strict';

const crypto = require('crypto');
const { algorithm, salt, digest } = require('../../config/settings').crypto;

module.exports = {
    sha256: (password) => {
        return crypto
            .createHmac(algorithm, salt)
            .update(password)
            .digest(digest)
    }
};