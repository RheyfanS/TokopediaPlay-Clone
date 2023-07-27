// data/dummyData.js
const mongoose = require('mongoose');
const uuid = require('uuid');
const Video = require('../models/Video');
const Product = require('../models/Product');
const Comment = require('../models/Comment');

const dummyVideoData = [
  {
    videoID: uuid.v4(),
    thumbnailUrl: 'https://example.com/thumbnail1.jpg',
  },
  {
    videoID: uuid.v4(),
    thumbnailUrl: 'https://example.com/thumbnail2.jpg',
  },
];

const dummyProductData = [
  {
    VideoID: null, 
    link: 'https://example.com/product1',
    title: 'Product 1',
    price: 50.0,
  },
  {
    VideoID: null, 
    link: 'https://example.com/product2',
    title: 'Product 2',
    price: 70.0,
  },
];

const dummyCommentData = [
  {
    VideoID: null, 
    username: 'User1',
    comment: 'This video is awesome!',
  },
  {
    VideoID: null, 
    username: 'User2',
    comment: 'Great content!',
  },
];

async function createDummyData() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/tokopedia-play', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const videos = await Video.create(dummyVideoData);

    for (let i = 0; i < dummyProductData.length; i++) {
      dummyProductData[i].VideoID = videos[i]._id;
      await Product.create(dummyProductData[i]);
    }

    for (let i = 0; i < dummyCommentData.length; i++) {
      dummyCommentData[i].VideoID = videos[i]._id;
      await Comment.create(dummyCommentData[i]);
    }

    console.log('Dummy data created successfully.');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error creating dummy data:', err);
  }
}

createDummyData();
