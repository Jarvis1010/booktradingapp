var express=require('express');
var router=express.Router();

var ctrBugs=require('../controllers/bug-controller.js');

router
.route('/bugs')
.get(ctrBugs.getBugs)
.post(ctrBugs.addBug);

module.exports = router;