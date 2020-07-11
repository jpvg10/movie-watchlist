const listModel = require('../models/list-model');

module.exports = {
	getFavorites: function(userId){
		return new Promise(function(resolve, reject){
			listModel.findOne({ _user: userId })
				.then(function(list){
					resolve(list.favorites);
				})
				.catch(function(error){
					reject(error);
				});
		});		
	},
	addFavorite: function(userId, movieName){
		return new Promise(function(resolve, reject){
			listModel.findOneAndUpdate(
				{ _user: userId },
				{ $push: { favorites: {name: movieName} } },
				{ new: true }
			)
				.then(function(list){
					resolve(list.favorites);
				})
				.catch(function(error){
					reject(error);
				});
		});
	},
	editFavorite: function(userId, movieName, stars){
		return new Promise(function(resolve, reject){
			listModel.findOneAndUpdate(
				{ _user: userId, 'favorites.name': movieName },
				{ $set: { 'favorites.$.stars': stars } },
				{ new: true }
			)
				.then(function(list){
					resolve(list.favorites);
				})
				.catch(function(error){
					reject(error);
				});
		});
	},
	removeFavorite: function(userId, movieName){
		return new Promise(function(resolve, reject){
			listModel.findOneAndUpdate(
				{ _user: userId },
				{ $pull: { favorites: {name: movieName} } },
				{ new: true }
			)
				.then(function(list){
					resolve(list.favorites);
				})
				.catch(function(error){
					reject(error);
				});
		});
	}
};
