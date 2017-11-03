const userModel = require('../models/user-model');

module.exports = {
	getFavorites: function(userId){
		return new Promise(function(resolve, reject){
			userModel.findById(userId)
				.then(function(user){
					resolve(user.favorites);
				})
				.catch(function(error){
					reject(error);
				});
		});		
	},
	addFavorite: function(userId, movieName, stars){
		return new Promise(function(resolve, reject){
			userModel.findById(userId)
				.then(function(user){					
					user.favorites.push({ name: movieName });					
					user.save()
						.then(function(updatedUser){
							resolve(updatedUser.favorites);
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
	editFavorite: function(userId, movieName, stars){

	},
	removeFavorite: function(userId, movieName){
		return new Promise(function(resolve, reject){
			userModel.findById(userId)
				.then(function(user){
					user.favorites = user.favorites.filter(function(movie){
						return movie.name !== movieName;
					});
					user.save()
						.then(function(updatedUser){
							resolve(updatedUser.favorites);
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
