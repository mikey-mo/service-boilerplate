const validator = require('express-joi-validation').createValidator();

const initialSchema = require('../schemas/initial-schema');

const validateInitialHeaders = validator.body(initialSchema.initialHeaders);

module.exports = {
    validateInitialHeaders,
};
