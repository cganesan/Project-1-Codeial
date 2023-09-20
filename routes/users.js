const express = require('express');

const router = express.Router();
const usersController = require ('../controllers/users_controller');
const postController = require ('../controllers/post_controller');

router.get('/profile', usersController.profile);
router.get('/profile/message', postController.message );

router.get('/sign-in', usersController.signIn);
router.get('/sign-up', usersController.signUp);

router.post('/create', usersController.create);

module.exports = router;