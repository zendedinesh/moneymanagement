const express = require('express');
const router = express.Router();
const { register, login, getMe } = require('../controllers/auth');
const { addexpenseTomongodb, getmyexpenses, getexpensebycategories, editbyuser, deletebyuser, editprofile, addusersalary } = require('../controllers/Addexpensefunc');
const { protecter } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/me', protecter, getMe);

router.post('/expense', protecter, addexpenseTomongodb);
router.get('/expense', protecter, getmyexpenses);
router.get('/expenses', protecter, getexpensebycategories); 
router.put('/expense', protecter, editbyuser); 
router.delete('/expense', protecter, deletebyuser); 
router.put('/editprofile', protecter, editprofile); 
router.post('/addsalary', protecter, addusersalary);  

module.exports = router;