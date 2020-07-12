import List from '../models/list';
import { RequestHandler } from 'express';

export const getWatchlist: RequestHandler = async (req, res) => {
  try {
    const userId = req.query.userId as string;

    const list = await List.findOne({ _user: userId });
    if (!list) return res.status(404).send();

    res.status(200).send(list.watchlist);
  } catch (e) {
    res.status(500).send();
  }
};

export const addToWatchlist: RequestHandler = async (req, res) => {
  try {
    const userId = req.query.userId as string;
    const name = req.body.name as string;

    let list = await List.findOne({ _user: userId });
    if (!list) {
      list = new List({ _user: userId });
    }

    list.watchlist.push({ name });
    await list.save();

    res.status(200).send(list.watchlist);
  } catch (e) {
    res.status(500).send();
  }
};

export const removeFromWatchlist: RequestHandler = async (req, res) => {
  try {
    const userId = req.query.userId as string;
    const name = req.body.name as string;

    const list = await List.findOneAndUpdate({ _user: userId }, { $pull: { watchlist: { name } } }, { new: true });
    if (!list) return res.status(404).send();

    res.status(200).send(list?.watchlist);
  } catch (e) {
    res.status(500).send();
  }
};
