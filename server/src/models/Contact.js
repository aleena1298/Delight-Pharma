const mongoose = require('mongoose');
const schema = new mongoose.Schema({ name: { type: String, required: true, trim: true }, email: { type: String, required: true, lowercase: true, trim: true }, phone: { type: String, trim: true }, message: { type: String, required: true, trim: true, maxlength: 2000 }, status: { type: String, enum: ['new', 'read', 'resolved'], default: 'new' } }, { timestamps: true });
module.exports = mongoose.model('Contact', schema);
