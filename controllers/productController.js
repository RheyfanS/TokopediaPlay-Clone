const Product = require('../models/Product');

exports.getProductList = async (req, res) => {
  try {
    const { VideoID } = req.query;
    const products = await Product.find({ VideoID }).select('-_id -VideoID');
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
