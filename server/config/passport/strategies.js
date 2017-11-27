'use strict';

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../../models/user');
const secret = require('../settings').jwt.secret;

const createJwtStrategy = role => {
    const options = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret
    };

    return new JwtStrategy(options, (payload, done) => {
        User.findOne({ mail: payload.mail })
            .then(user => done(null, (user.role === role) ? user : false))
            .catch(err => done(err, false));
    });
};

module.exports = passport => {
    passport.use('user-jwt', createJwtStrategy('user'));
    passport.use('admin-jwt', createJwtStrategy('admin'));
};