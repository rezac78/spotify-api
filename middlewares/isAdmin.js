const isAdmin = (req, res, next) => {
  return (req, res, next) => {
    const user = req.user;
    if (user && user.roles.includes(role)) {
      next();
    } else {
      res.status(403).send({ message: "Access denied" });
    }
  };
};
module.exports = isAdmin;
