let movies = ['One Flew Over The Cuckoo\'s Nest', 'Inglourious Basterds', 'Interstellar'];

module.exports = {
	getFavorites: function(userId){
		return new Promise(function(resolve, reject){
			resolve(movies);
		});		
	},
	addFavorite: function(userId, title){
		return new Promise(function(resolve, reject){
			movies.push(title);
			resolve(movies);
		});
	},
	editFavorite: function(userId, title, stars){

	},
	removeFavorite: function(userId, title){
		return new Promise(function(resolve, reject){
			movies = movies.filter(function(item){
				return item !== title;
			});
			resolve(movies);
		});
	}
};
