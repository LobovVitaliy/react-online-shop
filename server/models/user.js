'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppError = require('../libs/errors');

const UserSchema = new Schema({
    mail: { type: String, unique: true, required: true },
    password: { type: String, minlength: 4, required: true },
    role: { type: String, default: 'user' }
}, { versionKey: false });

function verify(doc, next) {
    !doc ? next(AppError.notFound('User Not Found')) : next();
}

UserSchema.post('findOne', verify);

UserSchema.post('save', function(err, doc, next) {
    (err.name === 'MongoError' && err.code === 11000)
    ? next(AppError.badRequest('That email address is already in use'))
    : next(err);
});

module.exports = mongoose.model('User', UserSchema);