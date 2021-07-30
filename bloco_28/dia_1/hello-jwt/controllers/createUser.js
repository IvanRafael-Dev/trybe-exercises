const User = require('../models/User');

const createUser = async (req, res) => {
  const newUser = await User.createUser(req.body);
  return res.status(200).json({ msg: 'User created', user: newUser });
};

module.exports = {
  createUser,
};
