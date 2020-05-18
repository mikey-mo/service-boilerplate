const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const { Strategy: BearerStrategy } = require('passport-http-bearer');
// const bcrypt = require('bcrypt');

const databaseService = require('./database');

passport.use('client-basic', new BasicStrategy(
    (async (username, password, done) => {
        let client;
        try {
            client = await databaseService.getClient({ username });
            // if (!await bcrypt.compareSync(password, client.password)) return done(null, false);
        } catch (error) {
            return done(error);
        }
        return done(null, client);
    }),
));

passport.use('client-bearer', new BearerStrategy(
    (async (token, done) => {
        let client;
        try {
            client = await databaseService.getClientByToken({ token });
        } catch (error) {
            return done(error);
        }
        return done(null, client);
    }),
));

module.exports = {
    checkSwaggerAuthorizationToken(req, res, next) {
        return next();
    },
    checkClientBasic: passport.authenticate(['client-basic', 'client-bearer'], { session: false }),
};
