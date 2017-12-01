'use strict';

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../../models/user');
const secret = require('../settings').jwt.secret;

const cookieExtractor = req => {
    return (req && req.cookies) ? req.cookies['jwt'] : null;
};

const createJwtStrategy = role => {
    const options = {
        jwtFromRequest: cookieExtractor,
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