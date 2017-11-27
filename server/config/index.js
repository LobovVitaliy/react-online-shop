'use strict';

const morgan = require('morgan');
const bodyParser = require('body-parser');
const fileupload = require('express-fileupload');

module.exports = app => {
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(fileupload());

    require('./passport')(app);
};