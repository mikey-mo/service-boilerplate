const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');

const RUN_ENVIRONMENT = process.env.NODE_ENV || 'production';

if (RUN_ENVIRONMENT === 'development') dotenv.config();

const initialRoute = require('./routes/initial');
const swaggerDoc = require('./config/swagger.json');
const { route, version, description } = require('./config/version');
const authenticationService = require('./services/authentication');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 1000000 }))
    .use(bodyParser.json({ limit: '50mb', extended: true }))
    .use(`${route}/initial`, initialRoute)
    .use(
        `${route}/docs`,
        [authenticationService.checkSwaggerAuthorizationToken, swaggerUi.serve],
        swaggerUi.setup(swaggerDoc),
    );

app.get(route, (req, res) => res.json({ version, description }));

module.exports = {
    app,
    RUN_ENVIRONMENT,
    PORT,
    route,
};
