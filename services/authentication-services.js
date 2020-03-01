const checkAuthorizationToken = (req, res, next) => {
  if (req.headers.authorization !== `Bearer ${process.env.AUTHORIZATION_TOKEN}`) {
    return res.status(401).json({ error: 'Invalid Credentials' });
  }
  return next();
};

const checkSwaggerAuthorizationToken = (req, res, next) => next();

module.exports = {
  checkSwaggerAuthorizationToken,
  checkAuthorizationToken,
};
