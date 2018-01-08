'use strict';

const passport = require('passport');
const session = require('../../config/settings').jwt.session;

module.exports = {
    user: (req, res, next) => {
        passport.authenticate('user-jwt', { session })(req, res, next);
    },
    admin: (req, res, next) => {
        passport.authenticate('admin-jwt', { session })(req, res, next);
    },
    adminPage: (req, res, next) => {
        passport.authenticate('admin-jwt', {
            session,
            failureRedirect: '/'
        })(req, res, next);
    }
};