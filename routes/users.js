const express = require('express');

const router = express.Router();
const usersController = require ('../controllers/users_controller');
const postController = require ('../controllers/post_controller');

router.get('/profile', usersController.profile);
router.get('/profile/message', postController.message );

module.exports = router;