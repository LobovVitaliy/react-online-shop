'use strict';

const Joi = require('joi');
const AppError = require('../../libs/errors');

module.exports = (req, res, next) => {
    const schema = Joi.object().keys({
        mail: Joi.string().email().required(),
        password: Joi.string().min(4).required()
    });

    Joi.validate(req.body, schema, (err, value) => {
        err ? next(AppError.badRequest(err.message)) : next();
    });
};