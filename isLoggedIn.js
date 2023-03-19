const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(403).send({ message: "not logged in" });
};

export default isLoggedIn;
