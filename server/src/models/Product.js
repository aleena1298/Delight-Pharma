const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  description: { type: String, required: true, trim: true, maxlength: 1000 },
  category: { type: String, required: true, trim: true, index: true },
  price: { type: Number, required: true, min: 0 }, stock: { type: Number, required: true, min: 0, default: 0 },
  image: { type: String, default: '/assets/acneca.png' }, featured: { type: Boolean, default: false }, active: { type: Boolean, default: true }
}, { timestamps: true });
productSchema.index({ name: 'text', description: 'text', category: 'text' });
module.exports = mongoose.model('Product', productSchema);
