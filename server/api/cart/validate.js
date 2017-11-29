'use strict';

const Joi = require('joi');
const AppError = require('../../libs/errors');

module.exports = (req, res, next) => {
    const schema = Joi.object().keys({
        id: Joi.string().required()
    });

    Joi.validate(req.body, schema, (err, value) => {
        err ? next(AppError.badRequest(err.message)) : next();
    });
};