function authorize(req, res, next) {
  if (!req.headers.authorization || req.headers.authorization.length !== 16) {
    return res.status(401).json({ msg: "Unauthorized" })
  }
  next();
}

module.exports = authorize;