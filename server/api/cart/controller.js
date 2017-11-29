'use strict';

const Product = require('../../models/product');
const AppError = require('../../libs/errors');

module.exports = {
    get: (req, res, next) => {
        Product.find({ _id: { $in: req.user.cart } })
            .then(products => res.json(products))
            .catch(err => next(err));
    },
    add: (req, res, next) => {
        const user = req.user;
        const id = req.body.id;

        if (user.cart.indexOf(id) === -1) {
            Product.findById(id)
                .then(() => user.cart.push(id))
                .then(() => user.save())
                .then(() => Product.find({ _id: { $in: user.cart } }))
                .then(products => res.json(products))
                .catch(err => next(err));
        } else {
            next(AppError.badRequest('Product was already added'));
        }
    },
    delete: (req, res, next) => {
        const user = req.user;
        const index = user.cart.indexOf(req.params.id);

        if (index !== -1) {
            user.cart.splice(index, 1);
            user.save()
                .then(() => Product.find({ _id: { $in: user.cart } }))
                .then(products => res.json(products))
                .catch(err => next(err));
        } else {
            next(AppError.badRequest('Product Not Found'));
        }
    }
};