const express = require('express');
const router = express.Router();
const { Userone } = require("../controllers/Userbhai")
const { Useraddress } = require("../controllers/Userbhai")
const { UserTransaction } = require("../controllers/Userbhai")
// transition in mongodb
router.post('/userinfo', Userone)
router.post('/userdata', Useraddress)
// apply transaction methods here 
router.post('/usertransaction', UserTransaction);
router.put('/usertransaction', UserTransaction);
router.get('/usertransaction', UserTransaction);
router.delete('/usertransaction', UserTransaction);


module.exports = router