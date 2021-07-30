require('dotenv').config();
const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

module.exports = async (req, _res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    const err = new Error('Token not found');
    err.statusCode = 401;
    return next(err);
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    console.log(decoded);
    req.user = decoded;
    return next();
  } catch (err) {
    err.statusCode = 401;
    return next(err);
  }
};
