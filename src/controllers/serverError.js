const serverError = (err, req, res, next) => {
  res.status(500).json('server error');
};
module.exports = { serverError };
