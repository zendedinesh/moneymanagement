const express = require('express');
const router = express.Router();
const { register, login, getMe, } = require('../controllers/auth');
const { addexpenseTomongodb } = require('../controllers/Addexpensefunc')
const { getmyexpenses } = require('../controllers/Addexpensefunc')
const { protecter } = require('../middleware/auth');

router.post('/register', register);

router.post('/login', login);

router.get('/me', protecter, getMe);

router.post('/addexpense', protecter, addexpenseTomongodb)
router.get('/getexpense', protecter, getmyexpenses)
module.exports = router;