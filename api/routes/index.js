var express=require('express');
var router=express.Router();

var ctrUsers=require('../controllers/users-controller.js');


//authentication and user routes
router
.route('/register')
.post(ctrUsers.register);

router
.route('/login')
.post(ctrUsers.login);

router
.route('/profile')
.get(ctrUsers.authenticate,ctrUsers.profile);

module.exports = router;