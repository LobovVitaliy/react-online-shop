'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hash = require('../libs/hash');
const AppError = require('../libs/errors');

const UserSchema = new Schema({
    mail: { type: String, unique: true, required: true },
    password: { type: String, minlength: 4, required: true, select: false },
    cart: { type: Array, default: [] },
    role: { type: String, default: 'user' }
}, {
    versionKey: false,
    toObject: {
        transform: function(doc, ret) {
            delete ret.password;
        }
    }
});

function verify(doc, next) {
    !doc ? next(AppError.notFound('User Not Found')) : next();
}

UserSchema.post('findOne', verify);
UserSchema.post('findOneAndRemove', verify);

UserSchema.pre('save', function(next) {
    if (this.isModified('password')) {
        this.password = hash.sha256(this.password);
    }
    next();
});

UserSchema.post('save', function(err, doc, next) {
    (err.name === 'MongoError' && err.code === 11000)
    ? next(AppError.badRequest('That email address is already in use'))
    : next(err);
});

UserSchema.methods.compareAndGetUser = function(password) {
    if (hash.sha256(password) === this.password) {
        return this.toObject();
    } else {
        throw AppError.badRequest('Passwords do not match');
    }
};

module.exports = mongoose.model('User', UserSchema);