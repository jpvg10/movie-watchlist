const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/register', function(req, res, next){
	if(req.body.email && req.body.password){
		return passport.authenticate('local-signup', function(err){
			if(err){
				if (err.name === 'MongoError' && err.code === 11000) {
					// 11000 Mongo code is duplication email error
					return res.status(400).json({
						success: false,
						message: 'This email is already taken',
					});
				}else{
					res.status(400).json({
						success: false,
						message: 'Error'
					});
				}				
			}else{
				res.json({
					success: true,
					message: 'You have successfully signed up!',
				});
			}			
		})(req, res, next);		
	}else{
		res.status(400).json({
			success: false,
			message: 'Incomplete fields'
		});
	}
});

router.post('/login', function(req, res, next){
	if(req.body.email && req.body.password){
		return passport.authenticate('local-login', function(err, token, userData){
			if(err){
				if (err.name === 'IncorrectCredentialsError') {
					return res.status(400).json({
						success: false,
						message: err.message
					});
				}else{
					res.status(400).json({
						success: false,
						message: 'Error'
					});
				}				
			}else{
				res.json({
					success: true,
					message: 'You have successfully logged in!',
					token: token,
					user: userData
				});
			}			
		})(req, res, next);		
	}else{
		res.status(400).json({
			success: false,
			message: 'Incomplete fields'
		});
	}
});

module.exports = router;
