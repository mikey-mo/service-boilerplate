const router = require('express').Router();

router.get(
  '/',
  null,
  (req, res) => res.status(200).json({ initial: 'route' }),
);

module.exports = router;
