require('dotenv').config();
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const verifyEntries = (username, password) => 
  username && password;

const validateBody = (bodyObject) => {
  const { error } = Joi.object({
    username: Joi.string().alphanum().min(5).required(), // .message({ 'any.required': '....' }),
    password: Joi.string().min(5).required(),
  }).validate(bodyObject);
  
  if (error) throw error;
};

const isAdmin = ({ username, password }) => {
  if (username === 'admin' && password === 's3nh4S3gur4') return true;  
  if (username === 'admin' && password !== 's3nh4S3gur4') {
    const err = new Error('Invalid username or password'); 
    err.statusCode = 401;
    throw err;
  }
  return false;
};

const { SECRET } = process.env;

module.exports = (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!verifyEntries(username, password)) {
      return res.status(400).json({ msg: 'Username and password are required' });
    } 
    validateBody(req.body);
    const isUserAdmin = isAdmin(req.body);
    const payload = { username, admin: isUserAdmin };
    
    const jwtConfig = { expiresIn: '1m', algorithm: 'HS256' };
    const token = jwt.sign(payload, SECRET, jwtConfig);
    return res.status(200).json({ token });
  } catch (e) {
    next(e);
  }
};
