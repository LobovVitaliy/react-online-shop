'use strict';

const User = require('../../models/user');
const hash = require('./hash');
const jwt = require('jsonwebtoken');
const { secret, options } = require('../../config/settings').jwt;
const AppError = require('../../libs/errors');

module.exports = {
    signup: (req, res, next) => {
        const { mail, password } = req.body;

        User.create({ mail, password: hash.sha256(password) })
            .then(user => user.toObject())
            .then(payload => {
                delete payload.password;
                res.json(payload);
            })
            .catch(err => next(err));
    },
    login: (req, res, next) => {
        User.findOne({ mail: req.body.mail }, 'mail password')
            .then(user => {
                if (hash.sha256(req.body.password) === user.password) {
                    return user.toObject();
                } else {
                    throw AppError.badRequest('Passwords do not match');
                }
            })
            .then(payload => {
                delete payload.password;
                const token = 'bearer ' + jwt.sign(payload, secret, options);
                res.json({ token });
            })
            .catch(err => next(err));
    }
};