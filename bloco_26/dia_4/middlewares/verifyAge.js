function verifyAge(req, res, next) {
  const { age } = req.body;
  if (age < 18) return res.status(401).json({ message: "Unauthorized"});
  next();
}

module.exports = verifyAge;