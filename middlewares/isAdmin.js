const isAdmin = (roles) => (req, res, next) => {
  if (roles.includes(req.user.roles)) {
    next();
  } else {
    res.status(403).json({ message: 'Access forbidden' });
  }
};
module.exports = isAdmin;
