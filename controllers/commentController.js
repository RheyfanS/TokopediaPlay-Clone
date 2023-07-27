const Comment = require('../models/Comment');

exports.getCommentList = async (req, res) => {
  try {
    const { VideoID } = req.query;
    const comments = await Comment.find({ VideoID }).select('-_id -VideoID');
    res.json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.submitComment = async (req, res) => {
  try {
    const { username, comment, VideoID } = req.body;
    const newComment = new Comment({
      VideoID,
      username,
      comment,
    });
    await newComment.save();
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
