import express from 'express';
import { getWatchlist, addToWatchlist, removeFromWatchlist } from '../controllers/watchlist';
import { getFavorites, addFavorite, editFavorite, removeFavorite } from '../controllers/favorites';

const router = express.Router();

router.get('/', (_req, res) => {
  res.status(200).send({
    message: 'Movie watchlist API'
  });
});

router.get('/watchlist', getWatchlist);
router.post('/watchlist', addToWatchlist);
router.delete('/watchlist', removeFromWatchlist);

router.get('/favorites', getFavorites);
router.post('/favorites', addFavorite);
router.patch('/favorites', editFavorite);
router.delete('/favorites', removeFavorite);

export default router;
