module.exports = (req, _res, next) => {
  const { user } = req;
  if (!user) {
    const err = new Error('This endpoint needs authentication');
    err.statusCode = 401;
    next(err);
  }

  if (!user.admin) {
    const err = new Error('Restricted access');
    err.statusCode = 403;
    next(err);
  }
  return next();  
};
