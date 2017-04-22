var express=require('express');
var router=express.Router();

var ctrUsers=require('../controllers/users-controller.js');


//authentication and user
router
.route('/register')
.post(ctrUsers.register);

router
.route('/login')
.post(ctrUsers.login);

module.exports = router;