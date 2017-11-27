'use strict';

const Joi = require('joi');
const AppError = require('../../libs/errors');

module.exports = (req, res, next) => {
    const data = Object.assign({}, req.body, { image: req.files.image });
    const schema = Joi.object().keys({
        image: Joi.object().required(),
        title: Joi.string().trim().max(25).required(),
        text:  Joi.string().trim().max(500).required(),
        price: Joi.number().min(0).required()
    });

    Joi.validate(data, schema, (err, value) => {
        err ? next(AppError.badRequest(err.message)) : next();
    });
};