const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const { Strategy: BearerStrategy } = require('passport-http-bearer');

const db = require('./database');

class AuthenticationError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = 'Authentication Error';
    }
}

passport.use('client-basic', new BasicStrategy(
    (async (email, password, done) => {
        console.log(password, done);
        const dbClient = db.connect();
        let client;
        try {
            client = await dbClient.getClient({ email });
        } catch (error) {
            throw new AuthenticationError('Invalid Credentials');
        }
        return client;
    }),
));

passport.use('client-bearer', new BearerStrategy(
    ((accessToken, done) => {
        console.log(accessToken, done);
        // Token.findOne({ value: accessToken }, (error, token) => {
        //     if (!token.scope.filter((scope) => scope === 'read')
        //       .length) return callback(null, false);
        //     if (error) return callback(error);
        //     if (!token) return callback(null, false);
        //     return User.findOne({ _id: token.userId }, (userError, user) => {
        //         if (userError) return callback(userError);
        //         if (!user) return callback(null, false);
        //         return callback(null, user, { scope: '*' });
        //     });
        // });
    }),
));

const checkSwaggerAuthorizationToken = (req, res, next) => next();

module.exports = {
    checkSwaggerAuthorizationToken,
    checkClientBasic: passport.authenticate(['client-basic', 'client-bearer'], { session: false }),
};
