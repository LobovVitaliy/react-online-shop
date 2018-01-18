'use strict';

const ObjectId = require('mongoose').Types.ObjectId;
const Promise = require('bluebird');

const Product = require('../../models/product');
const User = require('../../models/user');
const Files = require('../../libs/files');

module.exports = {
    getAll: (req, res, next) => {
        const { search: searchText, sort: field, order } = req.query;
        const search = searchText
            ? { $text: { $search: `"${searchText.split(' ').join('" "')}"` } }
            : {};
        const sort = field ? { [field]: order || 'asc' } : {};
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);

        Product.find(search)
            .sort(sort)
            .skip((page - 1) * limit)
            .limit(limit)
            .then(products => {
                Product.count(search).then(count => res.json({ count, products }));
            })
            .catch(err => next(err));

        // v2
        // Promise.all([
        //     Product.find(search).sort(sort).skip((page - 1) * limit).limit(limit),
        //     Product.count(search)
        // ])
        // .then(([products, count]) => res.json({ products, count }))
        // .catch(err => next(err));
    },
    getById: (req, res, next) => {
        Product.findById(req.params.id)
            .then(product => res.json(product))
            .catch(err => next(err));
    },
    create: (req, res, next) => {
        const { title, text, price } = req.body;
        const _id = ObjectId();
        const image = `${_id}-${new Date().getTime()}`;

        Files.create(req.files.image, image)
            .then(() => Product.create({ _id, image, title, text, price }))
            .then(product => res.json(product))
            .catch(err => next(err));

        // v2
        // Promise.all([
        //     Product.create({ _id, image, title, text, price }),
        //     Files.create(req.files.image, image)
        // ])
        // .then(([product]) => res.json(product))
        // .catch(err => next(err));
    },
    update: (req, res, next) => {
        const _id = req.params.id;
        const image = req.files ? req.files.image : null;
        let data = req.body; // const data = { ...req.body };

        const promise = Product.findById(_id);

        if (image) {
            const name = `${_id}-${new Date().getTime()}`;
            data = { ...data, image: name }; // data.image = name;
            promise.then(product => Promise.all([
                Files.delete(product.image),
                Files.create(image, name)
            ]));
        }
        promise.then(product => {
                product.set(data);
                return product.save();
            })
            .then(product => res.json(product))
            .catch(err => next(err));

        // v2
        // const name = `${_id}-${new Date().getTime()}`;
        // const data = image ? { ...req.body, image: name } : req.body;
        // Product.findByIdAndUpdate(_id, { $set: data })
        //     .then(product => {
        //         if (image) {
        //             Promise.all([
        //                 Files.delete(product.image),
        //                 Files.create(image, name)
        //             ]);
        //         }
        //         return { ...product.toObject(), ...data };
        //     })
        //     .then(product => res.json(product))
        //     .catch(err => next(err));
    },
    delete: (req, res, next) => {
        const ids = req.body;

        Promise.all([
            Product.find({ _id: { $in: ids }}, 'image'),
            User.update({}, { $pull: { cart: { $in: ids } } }, { multi: true } )
        ])
        .then(([items]) => items.map(item => item.image))
        .then(images => Promise.map(images, Files.delete))
        .then(() => Product.remove({ _id: { $in: ids } }))
        .then(({ result }) => res.json(result))
        .catch(err => next(err));

        // v2
        // Promise.all([
        //     Product.find({ _id: { $in: ids }}, 'image'),
        //     User.update({}, { $pull: { cart: { $in: ids } } }, { multi: true } )
        // ])
        // .then(([items]) => Promise.all([...items.map(item => Files.delete(item.image))]))
        // .then(() => Product.remove({ _id: { $in: ids } }))
        // .then(({ result }) => res.json(result))
        // .catch(err => next(err));

        // v3
        // Promise.all([
        //     Product.find({ _id: { $in: ids }}, 'image'),
        //     User.update({}, { $pull: { cart: { $in: ids } } }, { multi: true } )
        // ])
        // .then(([items]) => Promise.all([
        //     Product.remove({ _id: { $in: ids } }),
        //     ...items.map(item => Files.delete(item.image))
        // ]))
        // .then(([{ result }]) => res.json(result))
        // .catch(err => next(err));
    }
};