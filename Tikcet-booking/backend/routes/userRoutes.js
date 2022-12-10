const express = require('express');
const router = express.Router();

const { postUser, login } = require('../controllers/userController');

router.post('/signup', postUser);
router.post('/login', login);

module.exports = router;
