import express from 'express';
import watchlistRouter from './watchlist';
import favoritesRouter from './favorites';
import userRouter from './user';

const router = express.Router();

router.get('/', (_req, res) => {
  res.status(200).send({
    message: 'Movie watchlist API'
  });
});

router.use(watchlistRouter);
router.use(favoritesRouter);
router.use(userRouter);

export default router;
