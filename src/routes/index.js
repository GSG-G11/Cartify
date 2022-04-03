const router = require('express').Router();
const {
  signup, login, logout, addPost, editPost, deletePost,
  saveUnsavePost, upVotePost, downVotePost, addComment,
  editComment, deleteComment, saveUnsaveComment,
  upVoteComment, downVoteComment, getAllPosts, serveHtml,
} = require('../controllers');
const { getTokenFromCookies, verfiyUser } = require('../utils');

router.get('/signup', serveHtml('signup'));
router.post('/signup', signup);
router.get('/login', serveHtml('login'));
router.post('/login', login);
router.get('/logout', logout);
router.use(getTokenFromCookies);
router.get('/home', getAllPosts);

router.use('/post', verfiyUser);
router.post('/post/add', addPost);
router.post('/post/edit', editPost);
router.get('/post/:postId/delete', deletePost);
router.get('/post/:postId/save', saveUnsavePost);
router.get('/post/:postId/upvote', upVotePost);
router.get('/post/:postId/downvote', downVotePost);

router.use('/comment', verfiyUser);
router.post('/comment/add', addComment);
router.post('/comment/edit', editComment);
router.get('/comment/:commentId/delete', deleteComment);
router.get('/comment/:commentId/save', saveUnsaveComment);
router.get('/comment/:commentId/upvote', upVoteComment);
router.get('/comment/:commentId/downvote', downVoteComment);

module.exports = router;
