const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  VideoID: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
  username: { type: String, required: true },
  comment: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;