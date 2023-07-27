const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  VideoID: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
  link: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
