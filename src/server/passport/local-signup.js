const UserModel = require('../models/user-model');
const ListModel = require('../models/list-model');
const PassportLocalStrategy = require('passport-local').Strategy;

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

		let newUser = UserModel(userData);
		newUser.save(function(err, user){
			if(err){
				return done(err);
			}

			let newList = ListModel({ _user: user.id });
			newList.save(function(err){
				if(err){
					return done(err);
				}

				return done(null);
			});			
		});
	}
);
