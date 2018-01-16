'use strict';

const express = require('express');
const settings = require('../config/settings');
const access = require('../api/users/access');

module.exports = app => {
    app.options('*', (req, res) => res.send(200));

    app.use('/static', express.static(settings.static));
    app.use('/api/v1', require('../api'));

    app.get('/admin*', access.adminPage, (req, res) => {
        res.sendFile('admin.html', { root: settings.static });
    });
    app.get('*', (req, res) => {
        res.sendFile('index.html', { root: settings.static });
    });

    app.use('*', (req, res) => res.status(404).json({ error: 'Not Found' }));

    app.use((err, req, res, next) => {
        res.status(err.status || 500).json({ error: err.message });
    });
};