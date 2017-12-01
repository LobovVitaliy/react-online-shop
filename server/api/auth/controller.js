'use strict';

const User = require('../../models/user');
const hash = require('./hash');
const jwt = require('jsonwebtoken');
const settings = require('../../config/settings');
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
        User.findOne({ mail: req.body.mail }, 'mail password role')
            .then(user => {
                if (hash.sha256(req.body.password) === user.password) {
                    return user.toObject();
                } else {
                    throw AppError.badRequest('Passwords do not match');
                }
            })
            .then(payload => {
                delete payload.password;
                const token = jwt.sign(payload, settings.jwt.secret, settings.jwt.options);
                res.cookie('jwt', token, settings.cookie);
                res.json({ token });
            })
            .catch(err => next(err));
    }
};