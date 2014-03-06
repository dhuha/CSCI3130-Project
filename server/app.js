
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	// yay!
});

var userSchema = new Schema({
	username: String,
	tags: String
});

var userModel = mongoose.model('User', userSchema);


app.get('/hello',function(req,res){
	res.send('hello world');
});

app.get('/user/tags',function(req,res){
	console.log('tag request');
	return  userModel.findOne({ 'username': 'TEST'},'username tags', function(err, u){
			if(!err){
				return res.send(u.tags);	
			}else{
				return res.send(err);	
			}
		});
});

app.post('/user/add',function(req,res){
	var nUser = new userModel({
		name: req.body.username,
		tags: req.body.tags
	 });
	nUser.save(function (err) {
 		 if (!err){
			 return console.log('new user');
		}else{
			return console.log(err);
  		}
	});
	return res.send(nUser);
});

var server = app.listen(30000,function(){
		console.log('Listening on port %d, adress %s',server.address().port,server.address().address);
})

