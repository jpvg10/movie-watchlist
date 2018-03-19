const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		index: { unique: true }
	},
	password: {
		type: String,
		required: true
	}
});

UserSchema.methods.comparePassword = function(password, callback) {
	bcrypt.compare(password, this.password, callback);
};

UserSchema.pre('save', function(next){
	const user = this;

	return bcrypt.genSalt(function(saltError, salt){
		if(saltError){ 
			return next(saltError); 
		}

		return bcrypt.hash(user.password, salt, function(hashError, hash){
			if(hashError){
				return next(hashError); 
			}

			user.password = hash;

			return next();
		});
	});
});

module.exports = mongoose.model('User', UserSchema);
