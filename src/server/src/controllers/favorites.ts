import List from '../models/list';
import { RequestHandler } from 'express';
import { IFavoriteMovie } from '../interaces';

export const getFavorites: RequestHandler = async (req, res) => {
  try {
    const userId = req.query.userId as string;

    const list = await List.findOne({ _user: userId });
    if (!list) return res.status(404).send();

    res.status(200).send(list.favorites);
  } catch (e) {
    res.status(500).send();
  }
};

export const addFavorite: RequestHandler = async (req, res) => {
  try {
    const userId = req.query.userId as string;
    const name = req.body.name as string;

    let list = await List.findOne({ _user: userId });
    if (!list) {
      list = new List({ _user: userId });
    }

    list.favorites.push({ name });
    await list.save();

    res.status(200).send(list.favorites);
  } catch (e) {
    res.status(500).send();
  }
};

export const editFavorite: RequestHandler = async (req, res) => {
  try {
    const userId = req.query.userId as string;
    const name = req.body.name as string;
    const stars = req.body.stars as number;

    const list = await List.findOne({ _user: userId });
    if (!list) return res.status(404).send();

    const movie = list.favorites.find((movie: IFavoriteMovie) => movie.name === name);
    if (!movie) return res.status(404).send();

    movie.stars = stars;
    await list.save();

    res.status(200).send(list.favorites);
  } catch (e) {
    res.status(500).send();
  }
};

export const removeFavorite: RequestHandler = async (req, res) => {
  try {
    const userId = req.query.userId as string;
    const name = req.body.name as string;

    const list = await List.findOneAndUpdate({ _user: userId }, { $pull: { favorites: { name } } }, { new: true });
    if (!list) return res.status(404).send();

    res.status(200).send(list?.favorites);
  } catch (e) {
    res.status(500).send();
  }
};
