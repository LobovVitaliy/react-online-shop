'use strict';

const User = require('../../models/user');
const jwt = require('../../libs/jwt');
const settings = require('../../config/settings');

module.exports = {
    get: (req, res, next) => {
        const { search: searchText, sort: field, order } = req.query;
        const search = searchText
            ? { $text: { $search: `"${searchText.split(' ').join('" "')}"` } }
            : {};
        const sort = field ? { [field]: order || 'asc' } : {};
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);

        User.find(search)
            .sort(sort)
            .skip((page - 1) * limit)
            .limit(limit)
            .then(users => {
                User.count(search).then(count => res.json({ count, users }));
            })
            .catch(err => next(err));
    },
    signup: (req, res, next) => {
        User.create(req.body)
            .then(user => res.json(user.toObject()))
            .catch(err => next(err));
    },
    login: (req, res, next) => {
        const { mail, password } = req.body;

        User.findOne({ mail }, 'mail password role')
            .then(user => user.compareAndGetUser(password))
            .then(user => jwt.sign(user))
            .then(token => {
                res.cookie('jwt', token, settings.cookie);
                res.json({ token });
            })
            .catch(err => next(err));
    },
    update: (req, res, next) => {
        User.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(user => res.json(user))
            .catch(err => next(err));
    },
    delete: (req, res, next) => {
        User.remove({ _id: { $in: req.body } })
            .then(({ result }) => res.json(result))
            .catch(err => next(err));
    }
};