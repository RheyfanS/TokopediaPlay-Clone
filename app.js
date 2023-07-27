const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/tokopedia-play', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import routes
const videoRoutes = require('./routes/videoRoutes');
const productRoutes = require('./routes/productRoutes');
const commentRoutes = require('./routes/commentRoutes');

// Use routes
app.use('/api/videos', videoRoutes);
app.use('/api/products', productRoutes);
app.use('/api/comments', commentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
