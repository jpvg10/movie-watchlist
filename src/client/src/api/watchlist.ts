import axios from 'axios';
import { IMovie } from '../utils/interfaces';
import { getTokenData } from '../utils/tokenHelper';

export const getWatchlist = async (): Promise<IMovie[]> => {
  const result = await axios.request<IMovie[]>({
    method: 'get',
    url: '/api/watchlist',
    headers: { Authorization: `Bearer ${getTokenData()?.token}` }
  });
  return result.data;
};

export const addToWatchlist = async (movie: IMovie): Promise<IMovie> => {
  const result = await axios.request<IMovie>({
    method: 'post',
    url: '/api/watchlist',
    headers: { Authorization: `Bearer ${getTokenData()?.token}` },
    data: movie
  });
  return result.data;
};

export const moveToFavorites = async (id: string): Promise<void> => {
  await axios.request({
    method: 'patch',
    url: `/api/watchlist/${id}`,
    headers: { Authorization: `Bearer ${getTokenData()?.token}` },
    data: { isFavorite: true }
  });
};

export const deleteFromWatchlist = async (id: string): Promise<void> => {
  await axios.request({
    method: 'delete',
    url: `/api/watchlist/${id}`,
    headers: { Authorization: `Bearer ${getTokenData()?.token}` }
  });
};
