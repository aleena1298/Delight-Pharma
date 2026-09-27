const ApiError = require('../utils/apiError');

function notFound(req, res, next) { next(new ApiError(404, `Route ${req.method} ${req.originalUrl} not found`)); }
function errorHandler(err, req, res, next) {
  let status = err.status || 500;
  let message = err.message || 'Unexpected server error';
  if (err.name === 'ValidationError') { status = 400; message = 'Validation failed'; }
  if (err.code === 11000) { status = 409; message = `${Object.keys(err.keyValue)[0]} already exists`; }
  if (err.name === 'CastError') { status = 400; message = 'Invalid resource identifier'; }
  if (status >= 500) console.error(err);
  res.status(status).json({ success: false, message, ...(err.details && { details: err.details }) });
}
module.exports = { notFound, errorHandler };
