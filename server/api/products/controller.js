'use strict';

const ObjectId = require('mongoose').Types.ObjectId;

const Product = require('../../models/product');
const Files = require('../../libs/files');

module.exports = {
    getAll: (req, res, next) => {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);

        Product.find()
            .skip((page - 1) * limit)
            .limit(limit)
            .then(products => {
                Product.count().then(count => res.json({ count, products }));
            })
            .catch(err => next(err));
    },
    getById: (req, res, next) => {
        Product.findById(req.params.id)
            .then(product => res.json(product))
            .catch(err => next(err));
    },
    create: (req, res, next) => {
        const { title, text, price } = req.body;
        const _id = ObjectId();

        Product.create({ _id, title, text, price })
            .then(product => res.json(product))
            .then(() => Files.create(req.files.image, _id.toString()))
            .catch(err => next(err));
    },
    update: (req, res, next) => {
        const _id = req.params.id;

        Product.findByIdAndUpdate(_id, req.body)
            .then(product => res.json(product))
            .then(() => Files.create(req.files.image, _id))
            .catch(err => next(err));
    },
    delete: (req, res, next) => {
        const _id = req.params.id;
        
        Product.findByIdAndRemove(_id)
            .then(product => res.json(product))
            .then(() => Files.delete(_id))
            .catch(err => next(err));
    }
};