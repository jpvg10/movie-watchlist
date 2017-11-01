const express = require('express');
const router = express.Router();

const watchlistController = require('../controllers/watchlist-controller');
const favoriteController = require('../controllers/favorite-controller');

router.get('/watchlist', function(req, res){
	watchlistController.getWatchlist(req.userId)
		.then(function(data){
			res.send(data);
		})
		.catch(function(error){
			res.send(error);
		});
});

router.post('/watchlist', function(req, res){
	watchlistController.addToWatchlist(req.userId, req.body.title)
		.then(function(data){
			res.send(data);
		})
		.catch(function(error){
			res.send(error);
		});
});

router.delete('/watchlist', function(req, res){
	watchlistController.removeFromWatchlist(req.userId, req.body.title)
		.then(function(data){
			res.send(data);
		})
		.catch(function(error){
			res.send(error);
		});
});

router.get('/favorite', function(req, res){
	favoriteController.getFavorites(req.userId)
		.then(function(data){
			res.send(data);
		})
		.catch(function(error){
			res.send(error);
		});
});

router.post('/favorite', function(req, res){
	favoriteController.addFavorite(req.userId, req.body.title, req.body.stars)
		.then(function(data){
			res.send(data);
		})
		.catch(function(error){
			res.send(error);
		});
});

router.put('/favorite', function(req, res){
	favoriteController.editFavorite(req.userId, req.body.title, req.body.stars)
		.then(function(data){
			res.send(data);
		})
		.catch(function(error){
			res.send(error);
		});
});

router.delete('/favorite', function(req, res){
	favoriteController.removeFavorite(req.userId, req.body.title)
		.then(function(data){
			res.send(data);
		})
		.catch(function(error){
			res.send(error);
		});
});

module.exports = router;
