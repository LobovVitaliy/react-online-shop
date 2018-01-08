'use strict';

const Joi = require('joi');
const AppError = require('../../libs/errors');

const keys  = {
    mail: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
    role: Joi.string().required()
};

module.exports = {
    auth: (req, res, next) => {
        const schema = Joi.object().keys({
            mail: keys.mail,
            password: keys.password
        });

        Joi.validate(req.body, schema, (err, value) => {
            err ? next(AppError.badRequest(err.message)) : next();
        });
    },
    create: (req, res, next) => {
        const schema = Joi.object().keys(keys);

        Joi.validate(req.body, schema, (err, value) => {
            err ? next(AppError.badRequest(err.message)) : next();
        });
    }
};