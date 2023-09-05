const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    return next();
  } else {
    return res.status(403).send({ message: "Access forbidden: Admins only" });
  }
};
module.exports = isAdmin;
