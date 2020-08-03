import express from 'express';
import Movie from '../models/movie';
import { IMovie } from '../interfaces';
import auth from '../middleware/auth';

const router = express.Router();

router.get('/favorites', auth, async (req, res) => {
  try {
    const favorites = await Movie.find({ _user: req.user._id, isFavorite: true });
    res.status(200).send(favorites);
  } catch (e) {
    res.status(500).send();
  }
});

router.post('/favorites', auth, async (req, res) => {
  try {
    const movieData: IMovie = {
      name: req.body.name as string,
      _user: req.user._id,
      isFavorite: true
    };

    const movie = new Movie(movieData);
    await movie.save();

    res.status(200).send(movie);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch('/favorites/:id', auth, async (req, res) => {
  try {
    const { name, stars } = req.body;

    const updateData = {} as any;
    if (name) updateData.name = name;
    if (stars) updateData.stars = stars;

    const movie = await Movie.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!movie) return res.status(404).send();

    res.status(200).send(movie);
  } catch (e) {
    res.status(500).send();
  }
});

router.delete('/favorites/:id', auth, async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) return res.status(404).send();

    res.status(200).send();
  } catch (e) {
    res.status(500).send();
  }
});

export default router;
