import axios from 'axios';
import { IMovie, IFavoriteMovie } from '../utils/interfaces';
import { getTokenData } from '../utils/tokenHelper';

export const getFavorites = async (): Promise<IFavoriteMovie[]> => {
  const result = await axios.request<IFavoriteMovie[]>({
    method: 'get',
    url: '/api/favorites',
    headers: { Authorization: `Bearer ${getTokenData()?.token}` }
  });
  return result.data;
};

export const addToFavorites = async (movie: IMovie): Promise<IFavoriteMovie> => {
  const result = await axios.request<IFavoriteMovie>({
    method: 'post',
    url: '/api/favorites',
    headers: { Authorization: `Bearer ${getTokenData()?.token}` },
    data: movie
  });
  return result.data;
};
