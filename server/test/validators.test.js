const test = require('node:test');
const assert = require('node:assert/strict');
const rules = require('../src/validators');

test('registration rejects weak passwords and invalid email', () => {
  const result = rules.register.safeParse({ body: { firstName: 'Al', lastName: 'User', email: 'wrong', password: 'short' } });
  assert.equal(result.success, false);
});

test('order accepts valid item quantities and address', () => {
  const result = rules.order.safeParse({ body: { items: [{ productId: '507f1f77bcf86cd799439011', quantity: 2 }], shippingAddress: { fullName: 'Aleena User', phone: '03001234567', address: '123 Main Street', city: 'Karachi' } } });
  assert.equal(result.success, true);
});

test('order rejects empty carts', () => {
  const result = rules.order.safeParse({ body: { items: [], shippingAddress: { fullName: 'Aleena User', phone: '03001234567', address: '123 Main Street', city: 'Karachi' } } });
  assert.equal(result.success, false);
});
