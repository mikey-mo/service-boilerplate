const router = require('express').Router();
const authenticationService = require('../services/authentication');

router.get(
    '/',
    [authenticationService.checkClient],
    (req, res) => res.status(200).json({ initial: 'route' }),
);

module.exports = router;
