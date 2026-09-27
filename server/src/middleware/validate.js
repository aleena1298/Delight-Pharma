const ApiError = require('../utils/apiError');
module.exports = (schema) => (req, res, next) => {
  const result = schema.safeParse({ body: req.body, params: req.params, query: req.query });
  if (!result.success) return next(new ApiError(400, 'Please correct the highlighted fields', result.error.flatten()));
  req.validated = result.data; next();
};
