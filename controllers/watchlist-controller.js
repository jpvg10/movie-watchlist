const userModel = require('../models/user-model');

module.exports = {
	getWatchlist: function(userId){
		return new Promise(function(resolve, reject){
			userModel.findById(userId)
				.then(function(user){
					resolve(user.watchlist);
				})
				.catch(function(error){
					reject(error);
				});
		});
	},
	addToWatchlist: function(userId, movieName){
		return new Promise(function(resolve, reject){
			userModel.findById(userId)
				.then(function(user){					
					user.watchlist.push({ name: movieName });					
					user.save()
						.then(function(updatedUser){
							resolve(updatedUser.watchlist);
						})
						.catch(function(error){
							reject(error);
						});
				})
				.catch(function(error){
					reject(error);
				});
		});
	},
	removeFromWatchlist: function(userId, movieName){
		return new Promise(function(resolve, reject){
			userModel.findById(userId)
				.then(function(user){
					user.watchlist = user.watchlist.filter(function(movie){
						return movie.name !== movieName;
					});
					user.save()
						.then(function(updatedUser){
							resolve(updatedUser.watchlist);
						})
						.catch(function(error){
							reject(error);
						});
				})
				.catch(function(error){
					reject(error);
				});
		});
	}
};
