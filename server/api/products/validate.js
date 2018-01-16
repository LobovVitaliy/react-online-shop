'use strict';

const Joi = require('joi');
const AppError = require('../../libs/errors');

const keys  = {
    image: Joi.object(),
    title: Joi.string().trim().max(25),
    text:  Joi.string().trim().max(500),
    price: Joi.number().min(0)
};

module.exports = {
    create: (req, res, next) => {
        const image = req.files ? req.files.image : null;
        const data = { ...req.body, image };
        const requiredKeys = {};
        for (let key in keys) {
            requiredKeys[key] = keys[key].required()
        }
        const schema = Joi.object().keys(requiredKeys);

        Joi.validate(data, schema, (err, value) => {
            err ? next(AppError.badRequest(err.message)) : next();
        });
    },
    update: (req, res, next) => {
        const image = req.files ? req.files.image : null;
        const data = image ? { ...req.body, image } : req.body;
        const schema = Joi.object().keys(keys);

        Joi.validate(data, schema, (err, value) => {
            err ? next(AppError.badRequest(err.message)) : next();
        });
    },
    delete: (req, res, next) => {
        const schema = Joi.array().items(Joi.string().required()).required();

        Joi.validate(req.body, schema, (err, value) => {
            err ? next(AppError.badRequest(err.message)) : next();
        });
    }
};