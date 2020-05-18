const validator = require('express-joi-validation').createValidator();

const initialSchema = require('../schemas/initial-schema');

module.exports = {
    validateInitialHeaders() {
        return validator.body(initialSchema.initialHeaders);
    },
};
