const Video = require('../models/Video');

exports.getVideoList = async (req, res) => {
  try {
    const videos = await Video.find({}, { _id: 1, videoID: 1, thumbnailUrl: 1 });
    res.json(videos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// exports.addVideo = async (req, res) => {
//   try {
//     const { videoID, thumbnailUrl } = req.body;
//     const newVideo = new Video({
//       videoID,
//       thumbnailUrl,
//     });
//     await newVideo.save();
//     res.json({ success: true });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: 'Server Error' });
//   }
// };