/*
 *  Project server 
 * Author : Group 16
 *
 * CSCI3130 Winter Semester 2014
 *
 */
 var express = require('express');
 var app = express();
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;
 var db = mongoose.connection;
 var Users;

 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function callback () {
  var userSchema = new Schema({
    username: String,
    tags: String
  });
  Users = mongoose.model('User', userSchema);

});

 mongoose.connect('mongodb://localhost/group16');





// Enables CORS
var enableCORS = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};


// enable CORS!
app.use(enableCORS);
app.use(express.bodyParser());



app.get('/hello',function(req,res){
	res.send('hello world');
});



app.get('/user/tags/:id',function(req,res){
  console.log('tag request');
  return  userModel.findOne({username: req.params.id},function(err, u){
    if(!err){
      return res.send(u.tags);	
    }else{
     return res.send(err);	
   }
 });
});

app.post('/user/add',function(req,res){
	var nUser = new Users({
		username: req.body.username,
		tags: req.body.tags
	});
  nUser.save(function (err) {
  	if (!err){
      console.log('new user');
      res.send(200);
    };

  });
});

  var server = app.listen(60000,function(){
   console.log('Listening on port %d, adress %s',server.address().port,server.address().address);
 })

