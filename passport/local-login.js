const UserModel = require('../models/user-model');
const PassportLocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');

module.exports = new PassportLocalStrategy(
	{
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, 
	function(req, email, password, done){
		let userData = {
			email: email.trim(),
			password: password.trim()
		};

		return UserModel.findOne({ email: userData.email }, function(err, user){
			if(err){
				return done(err);
			}

			if(!user){
				let error = new Error('Incorrect email or password');
				error.name = 'IncorrectCredentialsError';
				return done(error);
			}

			return user.comparePassword(userData.password, function(passwordErr, isMatch){
				if(passwordErr){
					return done(passwordErr);
				}

				if(!isMatch){
					let error = new Error('Incorrect email or password');
					error.name = 'IncorrectCredentialsError';
					return done(error);
				}

				let payload = {
					sub: user._id
				};
				let token = jwt.sign(payload, 'themoviewatchlistsecret');

				let data = {
					email: user.email
				};

				return done(null, token, data);
			});
		});
	}
);
