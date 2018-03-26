const express = require('express');
const router = express.Router();

const watchlistController = require('../controllers/watchlist-controller');
const favoritesController = require('../controllers/favorites-controller');

router.get('/watchlist', function(req, res){
	watchlistController.getWatchlist(req.userId)
		.then(function(data){
			res.send(data);
		})
		.catch(function(error){
			if (!error.statusCode) error.statusCode = 500;
			res.status(error.statusCode).send(error);
		});
});

router.post('/watchlist', function(req, res){
	watchlistController.addToWatchlist(req.userId, req.body.name)
		.then(function(data){
			res.send(data);
		})
		.catch(function(error){
			if (!error.statusCode) error.statusCode = 500;
			res.status(error.statusCode).send(error);
		});
});

router.delete('/watchlist', function(req, res){
	watchlistController.removeFromWatchlist(req.userId, req.body.name)
		.then(function(data){
			res.send(data);
		})
		.catch(function(error){
			if (!error.statusCode) error.statusCode = 500;
			res.status(error.statusCode).send(error);
		});
});

router.get('/favorites', function(req, res){
	favoritesController.getFavorites(req.userId)
		.then(function(data){
			res.send(data);
		})
		.catch(function(error){
			if (!error.statusCode) error.statusCode = 500;
			res.status(error.statusCode).send(error);
		});
});

router.post('/favorites', function(req, res){
	favoritesController.addFavorite(req.userId, req.body.name)
		.then(function(data){
			res.send(data);
		})
		.catch(function(error){
			if (!error.statusCode) error.statusCode = 500;
			res.status(error.statusCode).send(error);
		});
});

router.put('/favorites', function(req, res){
	favoritesController.editFavorite(req.userId, req.body.name, req.body.stars)
		.then(function(data){
			res.send(data);
		})
		.catch(function(error){
			if (!error.statusCode) error.statusCode = 500;
			res.status(error.statusCode).send(error);
		});
});

router.delete('/favorites', function(req, res){
	favoritesController.removeFavorite(req.userId, req.body.name)
		.then(function(data){
			res.send(data);
		})
		.catch(function(error){
			if (!error.statusCode) error.statusCode = 500;
			res.status(error.statusCode).send(error);
		});
});

module.exports = router;
