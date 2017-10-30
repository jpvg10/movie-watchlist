const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');

//mongoose.connect(configDB.url); 

app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({ 
	secret: 'themoviewatchlistsecret',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/public'));

// Routes
app.use('/api', require('./routes/api'));
app.use('/auth', require('./routes/auth'));
app.use('/', require('./routes/views'));

// Error handling
app.use(function(err, req, res, next) {
	console.log(err.message);
	res.status(500).send({"Error" : err.message});
});

app.listen(3000, function(){
	console.log('Server running on port 3000');
});
