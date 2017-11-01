let movies = ['Forrest Gump', 'Schindler\'s List', 'Terminator 2'];

module.exports = {
	getWatchlist: function(userId){
		return new Promise(function(resolve, reject){
			resolve(movies);
		});
	},
	addToWatchlist: function(userId, title){
		return new Promise(function(resolve, reject){
			movies.push(title);
			resolve(movies);
		});
	},
	removeFromWatchlist: function(userId, title){
		return new Promise(function(resolve, reject){
			movies = movies.filter(function(item){
				return item !== title;
			});
			resolve(movies);
		});
	}
};
