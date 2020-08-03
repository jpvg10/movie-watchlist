import express from 'express';
import Movie from '../models/movie';
import { IMovie } from '../interfaces';
import auth from '../middleware/auth';

const router = express.Router();

router.get('/watchlist', auth, async (req, res) => {
  try {
    const watchlist = await Movie.find({ _user: req.user._id, isFavorite: false });
    res.status(200).send(watchlist);
  } catch (e) {
    res.status(500).send();
  }
});

router.post('/watchlist', auth, async (req, res) => {
  try {
    const movieData: IMovie = {
      name: req.body.name as string,
      _user: req.user._id,
      isFavorite: false
    };

    const movie = new Movie(movieData);
    await movie.save();

    res.status(200).send(movie);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch('/watchlist/:id', auth, async (req, res) => {
  try {
    const { name, isFavorite } = req.body;

    const updateData = {} as any;
    if (name) updateData.name = name;
    if (isFavorite) updateData.isFavorite = isFavorite;

    const movie = await Movie.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!movie) return res.status(404).send();

    res.status(200).send(movie);
  } catch (e) {
    res.status(500).send();
  }
});

router.delete('/watchlist/:id', auth, async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) return res.status(404).send();

    res.status(200).send();
  } catch (e) {
    res.status(500).send();
  }
});

export default router;
