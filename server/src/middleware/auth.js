const jwt = require('jsonwebtoken');
const ApiError = require('../utils/apiError');
const User = require('../models/User');

async function protect(req, res, next) {
  try {
    const token = req.headers.authorization?.startsWith('Bearer ') && req.headers.authorization.slice(7);
    if (!token) throw new ApiError(401, 'Please sign in to continue');
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(payload.sub).select('-passwordHash');
    if (!req.user) throw new ApiError(401, 'Account no longer exists');
    next();
  } catch (error) { next(error instanceof ApiError ? error : new ApiError(401, 'Your session is invalid or expired')); }
}
const requireAdmin = (req, res, next) => req.user.role === 'admin' ? next() : next(new ApiError(403, 'Administrator access required'));
module.exports = { protect, requireAdmin };
