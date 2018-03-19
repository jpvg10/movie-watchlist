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
			listModel.findOne({ _user: userId })
				.then(function(list){
					list.favorites.push({ name: movieName });
					list.save()
						.then(function(updatedList){
							resolve(updatedList.favorites);
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
		return new Promise(function(resolve, reject){
			listModel.findOne({ _user: userId })
				.then(function(list){
					let newFavorites = list.favorites;
					newFavorites.forEach(function(item){
						if(item.name === movieName){
							item.stars = stars;
							return;
						}
					});
					list.favorites = newFavorites;
					list.save()
						.then(function(updatedList){
							resolve(updatedList.favorites);
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
	removeFavorite: function(userId, movieName){
		return new Promise(function(resolve, reject){
			listModel.findOne({ _user: userId })
				.then(function(list){
					list.favorites = list.favorites.filter(function(movie){
						return movie.name !== movieName;
					});
					list.save()
						.then(function(updatedList){
							resolve(updatedList.favorites);
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
