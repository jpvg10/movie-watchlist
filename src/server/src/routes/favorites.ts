import express from 'express';
import List from '../models/list';
import { IFavoriteMovie } from '../interfaces';
import auth from '../middleware/auth';

const router = express.Router();

router.get('/favorites', auth, async (req, res) => {
  try {
    const list = await List.findOne({ _user: req.user._id });
    res.status(200).send(list?.favorites ?? []);
  } catch (e) {
    res.status(500).send();
  }
});

router.post('/favorites', auth, async (req, res) => {
  try {
    const movieData: IFavoriteMovie = {
      name: req.body.name as string
    };

    let list = await List.findOne({ _user: req.user._id });
    if (!list) {
      list = new List({ _user: req.user._id });
    }

    list.favorites.push(movieData);
    await list.save();

    res.status(200).send(list.favorites);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch('/favorites', auth, async (req, res) => {
  try {
    const movieData: IFavoriteMovie = {
      name: req.body.name as string,
      stars: req.body.stars as number
    };

    const list = await List.findOne({ _user: req.user._id });
    if (!list) return res.status(404).send();

    const movie = list.favorites.find((movie: IFavoriteMovie) => movie.name === movieData.name);
    if (!movie) return res.status(404).send();

    movie.stars = movieData.stars;
    await list.save();

    res.status(200).send(list.favorites);
  } catch (e) {
    res.status(500).send();
  }
});

router.delete('/favorites', auth, async (req, res) => {
  try {
    const movieData: IFavoriteMovie = {
      name: req.body.name as string
    };

    const list = await List.findOneAndUpdate(
      { _user: req.user._id },
      { $pull: { favorites: movieData } },
      { new: true }
    );
    if (!list) return res.status(404).send();

    res.status(200).send(list?.favorites);
  } catch (e) {
    res.status(500).send();
  }
});

export default router;
