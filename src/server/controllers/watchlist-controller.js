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
			listModel.findOneAndUpdate(
				{ _user: userId },
				{ $push: { watchlist: {name: movieName} } },
				{ new: true }
			)
				.then(function(list){
					resolve(list.watchlist);
				})
				.catch(function(error){
					reject(error);
				});
		});
	},
	removeFromWatchlist: function(userId, movieName){
		return new Promise(function(resolve, reject){
			listModel.findOneAndUpdate(
				{ _user: userId },
				{ $pull: { watchlist: {name: movieName} } },
				{ new: true }
			)
				.then(function(list){
					resolve(list.watchlist);
				})
				.catch(function(error){
					reject(error);
				});
		});
	}
};
