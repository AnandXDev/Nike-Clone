const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: String, // You can use ObjectId if you have a User model
    required: true,
  },
  products: [
    {
      productId: String,
      name: String,
      quantity: Number,
      price: String,
      img: String,
    }
  ],
  address: String,
  phone: String,
  email: String,
  pincode: String,
  payment: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);