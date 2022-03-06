const jwt = require('jsonwebtoken');
const { secret } = require('../config/config');

const verifyToken = (req, res, next) => {
  const token = req.get('Authorization') ? req.get('Authorization').split('Bearer')[1].trim() : null;
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        err: 'Token no válido',
      });
    }

    req.userAuth = decoded.user;
    return next();
  });
};

module.exports = verifyToken;
