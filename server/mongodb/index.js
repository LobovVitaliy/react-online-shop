'use strict';

const mongoose = require('mongoose');
const settings = require('../config/settings');

module.exports = () => {
    mongoose.Promise = require('bluebird');
    mongoose.connect(settings.mongo.url, settings.mongo.options);
};