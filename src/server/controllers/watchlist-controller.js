const listModel = require('../models/list-model');

module.exports = {
	getWatchlist: function(userId){
		return new Promise(function(resolve, reject){
			listModel.findOne({ _user: userId })
				.then(function(list){
					resolve(list.watchlist);
				})
				.catch(function(error){
					reject(error);
				});
		});
	},
	addToWatchlist: function(userId, movieName){
		return new Promise(function(resolve, reject){
			listModel.findOne({ _user: userId })
				.then(function(list){					
					list.watchlist.push({ name: movieName });
					list.save()
						.then(function(updatedList){
							resolve(updatedList.watchlist);
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
			listModel.findOne({ _user: userId })
				.then(function(list){
					list.watchlist = list.watchlist.filter(function(movie){
						return movie.name !== movieName;
					});
					list.save()
						.then(function(updatedList){
							resolve(updatedList.watchlist);
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
