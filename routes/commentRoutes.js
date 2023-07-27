const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/', commentController.getCommentList);
router.post('/submit', commentController.submitComment);

module.exports = router;
