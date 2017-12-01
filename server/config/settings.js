'use strict';

const path = require('path');
const root = path.normalize(`${__dirname}/../..`);

const expires = 86400; // 24h in seconds

module.exports = {
    port: process.env.PORT || 9000,

    static: path.join(root, 'public'),
    images: path.join(root, 'public/images'),

    crypto: {
        algorithm: 'sha256',
        salt: process.env.SALT || 'sd#n@45Df',
        digest: 'hex'
    },

    mongo: {
        url: 'mongodb://localhost:27017/online-shop',
        options: {
            useMongoClient: true
        }
    },

    jwt: {
        secret: 'd65kbcv4jkg5123b',
        session: false,
        options: {
            algorithm: 'HS256',
            expiresIn: expires
        }
    },

    cookie: {
        maxAge: expires * 1000
    }
};