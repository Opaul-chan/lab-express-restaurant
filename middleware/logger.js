function logger(req, res, next) {
  console.log(`[logger]: Requesting to ${req.method} ${req.url}`);
  //call next function
  next();
}

module.exports = logger;
