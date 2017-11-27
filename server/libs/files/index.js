'use strict';

const fs = require('fs');
const path = require('path');

const images = require('../../config/settings').images;

const files = {
    create: (file, name) => {
        return file.mv(path.join(images, name));
    },
    delete: (name) => {
        return new Promise((resolve, reject) => {
            fs.unlink(path.join(images, name), err => err ? reject(err) : resolve());
        });
    }
};

module.exports = files;