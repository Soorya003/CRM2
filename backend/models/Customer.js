const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  address: String,
  preferences: String,
  purchaseHistory: [String],
});

module.exports = mongoose.model('Customer', CustomerSchema);
