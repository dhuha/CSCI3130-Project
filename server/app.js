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
var passport = require('passport');
var Users;
var sys = require('sys');
var exec = require('child_process').exec;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    var userSchema = new Schema({
        username: String,
        tags: String,
        handle: String,
        password: String,
        ntags: String
    });
    userSchema.methods.validPassword = function(password) {
        return password == this.password;
    };
    var workoutSchema = new Schema({
        username: String,
        workout: String,
        duration: Number
    });
    Workouts = mongoose.model('Workout', workoutSchema);
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
    } else {
        next();
    }
};


// enable CORS!
app.use(enableCORS);
app.use(express.bodyParser());
app.use(express.cookieParser("djsfhgkjhdsfkjghsjkdhfgkjhd"));
app.use(express.session());
app.use(app.router);


app.get('/hello', function(req, res) {
    res.send('hello world');
});



app.get('/user/tags/:id', function(req, res) {
    console.log('tag request for ' + req.params.id);
    return Users.findOne({
        username: req.params.id
    }, function(err, u) {
        if (!err) {
            return res.send(u.tags);
        } else {
            return res.send(err);
        }
    });
});
app.get('/user/tags', function(req, res) {
    console.log('tag request for ' + req.session.username);
    if (req.session.username == null) {
        res.send(null);
    }
    return Users.findOne({
        username: req.session.username
    }, function(err, u) {
        if (!err) {
            return res.send(u.tags);
        } else {
            return res.send(err);
        }
    });
});
app.get('/user/ntags/', function(req, res) {
    console.log('ntag request for ' + req.session.username);
    if (req.session.username == null) {
        res.send(null);
    }
    return Users.findOne({
        username: req.session.username
    }, function(err, u) {
        if (!err) {
            return res.send(u.ntags);
        } else {
            return res.send(err);
        }
    });
});
app.get('/user/ntags/:id', function(req, res) {
    console.log('ntag request for ' + req.params.id);
    return Users.findOne({
        username: req.params.id
    }, function(err, u) {
        if (!err) {
            return res.send(u.ntags);
        } else {
            return res.send(err);
        }
    });
});
app.get('/user/twitter/:id', function(req, res) {
    console.log('twitter request');
    Users.findOne({
        username: req.params.id
    }, function(err, u) {
        if (!err) {
            return res.sendfile(u.handle);
        } else {
            return res.send(err);
        }
    });
});
app.get('/user/twitter', function(req, res) {
    console.log('twitter request');
    Users.findOne({
        username: req.session.username
    }, function(err, u) {
        if (!err) {
            return res.sendfile(u.handle);
        } else {
            return res.send(err);
        }
    });
});

app.post('/user/workout', function(req, res) {
    if (!req.session.username) {
        res.send("no-user");
    }
    var nWorkout = new Workouts({
        username: req.session.username,
        workout: req.body.username,
        duration: req.body.duration
    });
    console.log(nWorkout);
    nWorkout.save(function(err) {
        if (!err) {
            res.send("workout saved");
        }
    })
});
app.post('/user/workout/:id', function(req, res) {
    var nWorkout = new Workouts({
        username: req.params.id,
        workout: req.body.username,
        duration: req.body.duration
    });
    console.log(nWorkout);
    nWorkout.save(function(err) {
        if (!err) {
            res.send("workout saved");
        }
    })
});

app.get('/user/workout', function(req, res) {
    Workouts.find({
        username: req.session.username
    }, function(err, docs) {
        console.log(docs);
        if (!err) {
            res.send(docs);
        }
    })
});
app.get('/user/workout/:id', function(req, res) {
    Workouts.find({
        username: req.params.id
    }, function(err, docs) {
        console.log(docs);
        if (!err) {
            res.send(docs);
        }
    })
});

app.post('/user/add', function(req, res) {
    console.log(req.body.username + req.body.handle);
    var nUser = new Users({
        username: req.body.username,
        tags: req.body.tags,
        ntags: req.body.ntags,
        handle: req.body.handle,
        password: req.body.password
    });
    console.log(nUser);
    nUser.save(function(err) {
        if (!err) {
            console.log('new user');
            exec('python test.py ' + req.body.handle, function(error, stdout, stderr) {
                if (error !== null) {
                    console.log('exec error: ' + error);
                    res.send(200);
                } else {
                    console.log('stdout: ' + stdout);
                    console.log('stderr: ' + stderr);
                    res.send('user-added');
                }
            });
        }

    });
});
//handle login requests
app.post('/login', function(req, res) {
    console.log(req.body.username);
    Users.findOne({
        handle: req.body.username
    }, function(err, u) {
        if (err)
            res.send("no_user");
        if (req.body.password == u.password) {
            req.session.username = u.username;
            res.send("success");
        } else {
            res.send("wrong_pass");
        }

    });
});
app.post('/logout', function(req, res) {
    req.session.username = null;
    res.send(200);
});

app.get('/user', function(req, res) {
    if (req.session.username) {
        res.send(req.session.username)
    } else {
        res.send(null);
    }
});
app.get('/user/:id', function(req, res) {
    Users.findOne({
        handle: req.params.id
    }, function(err, u) {
        if (err) {
            res.send(null);
        } else {
            res.send(u.username);
        }
    });
});


var server = app.listen(60000, function() {
    console.log('Listening on port %d, adress %s', server.address().port, server.address().address);
})