const ping = (req, res) => {
  return res.status(200).json('pong');
};

module.exports = ping;