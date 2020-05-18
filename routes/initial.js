const router = require('express').Router();
const authenticationServices = require('../services/authentication');

router.get(
    '/',
    [authenticationServices.checkClientBasic],
    (req, res) => res.status(200).json({ initial: 'route' }),
);

module.exports = router;
