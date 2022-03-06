const verifyRole = (req, res, next) => {
  const { userAuth } = req;
  if (userAuth.role === 'ADMIN') {
    return next();
  }
  return res.json({
    ok: false,
    mensaje: 'El usuario debe ser administrador',
  });
};

module.exports = verifyRole;
