const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({ product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, name: String, quantity: { type: Number, min: 1 }, unitPrice: { type: Number, min: 0 } }, { _id: false });
const orderSchema = new mongoose.Schema({
  orderNumber: { type: String, unique: true, index: true }, customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: { type: [itemSchema], validate: v => v.length > 0 }, subtotal: { type: Number, required: true }, deliveryFee: { type: Number, required: true }, total: { type: Number, required: true },
  shippingAddress: { fullName: String, phone: String, address: String, city: String },
  status: { type: String, enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'], default: 'pending' }
}, { timestamps: true });
orderSchema.pre('validate', function () { if (!this.orderNumber) this.orderNumber = `DP-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`; });
module.exports = mongoose.model('Order', orderSchema);
