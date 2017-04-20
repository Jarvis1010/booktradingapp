var mongoose=require('mongoose');
var request=require('request');

var bugs =[{status:"active",priority:"1",owner:"Me",title:"Testing"},
		{status:"inactive",priority:"2",owner:"You",title:"Testing1"}];

module.exports.getBugs=(req,res)=>{
	res.json(bugs);	
}

module.exports.addBug=(req,res)=>{
    var body=req.body;
    bugs.push({status:body.status,owner:body.owner,title:body.title,priority:body.priority});
    res.json(body);
}