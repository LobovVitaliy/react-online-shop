'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppError = require('../libs/errors');

const ProductSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: { type: String, maxlength: 25, required: true },
    text:  { type: String, maxlength: 500, required: true },
    price: { type: Number, min: 0, required: true }
}, { versionKey: false });

function verify(doc, next) {
    !doc ? next(AppError.notFound('Product Not Found')) : next();
}

ProductSchema.post('findOne', verify);
ProductSchema.post('findOneAndUpdate', verify);
ProductSchema.post('findOneAndRemove', verify);

module.exports = mongoose.model('Product', ProductSchema);