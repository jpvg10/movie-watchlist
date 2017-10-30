const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

// Mongoose
mongoose.connect('mongodb://localhost/movie_watchlist');
mongoose.Promise = global.Promise;

// Parsers
app.use(cookieParser());
app.use(bodyParser.json());

// Passport
app.use(passport.initialize());
app.use(passport.session());
passport.use('local-signup', require('./passport/local-signup'));
passport.use('local-login', require('./passport/local-login'));

// Static files
app.use(express.static(__dirname + '/public'));

// Middleware
app.use('/api', require('./middleware/auth-check'));

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
