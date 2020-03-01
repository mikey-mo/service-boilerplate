const router = require('express').Router();
const authenticationServices = require('../services/authentication-services');

router.get(
  '/',
  [
    authenticationServices.checkAuthorizationToken,
  ],
  (req, res) => res.status(200).json({ initial: 'route' }),
);

module.exports = router;
