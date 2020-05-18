const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const { Strategy: BearerStrategy } = require('passport-http-bearer');
// const bcrypt = require('bcrypt');

const databaseService = require('./database');

passport.use('client-basic', new BasicStrategy(
    (async (username, password, done) => {
        console.log('basic auth being used');
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

passport.use('client-basic-admin', new BasicStrategy(
    (async (username, password, done) => {
        console.log('basic auth being used');
        try {
            const client = await databaseService.getClient({ username });
            if (!client.admin) return done(null, false);
            return done(null, client);
            // if (!await bcrypt.compareSync(password, client.password)) return done(null, false);
        } catch (error) {
            return done(error);
        }
    }),
));

passport.use('client-bearer', new BearerStrategy(
    (async (token, done) => {
        console.log('bearer auth being used');
        try {
            const client = await databaseService.getClientByToken({ token });
            return done(null, client);
        } catch (error) {
            return done(error);
        }
    }),
));

module.exports = {
    checkSwaggerAuthorizationToken(req, res, next) { return next(); },
    checkClient: passport.authenticate(['client-basic', 'client-bearer'], { session: false }),
    checkClientAdmin: passport.authenticate(['client-basic-admin'], { session: false }),
};
