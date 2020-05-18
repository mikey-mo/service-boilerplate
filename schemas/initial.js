const Joi = require('joi');

module.exports = {
    initialBody: Joi.object({}),
    initialHeaders: Joi.object({
        authorization: Joi.string().required(),
    }),
};
