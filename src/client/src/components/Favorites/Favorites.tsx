import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { IMovie, IFavoriteMovie } from '../../utils/interfaces';
import { ERequestStatus } from '../../utils/enums';
import AddMovieForm from '../AddMovieForm/AddMovieForm';
import {
  getFavorites,
  addToFavorites,
  deleteFromFavorites,
  patchFavorite
} from '../../api/favorites';
import shootingStar from './shooting-star.png';
import IconButton from '../Common/IconButton';
import Stars from '../Common/Stars';

const Favorites: React.FC = () => {
  const [movies, setMovies] = useState<IFavoriteMovie[]>([]);
  const [requestStatus, setRequestStatus] = useState<ERequestStatus>(ERequestStatus.LOADING);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const result = await getFavorites();
        setMovies(result);
        setRequestStatus(ERequestStatus.LOADED);
      } catch (e) {
        console.log(e);
        setRequestStatus(ERequestStatus.FAILED);
      }
    };
    loadFavorites();
  }, []);

  const onSubmit = async (name: string) => {
    try {
      const movieData: IMovie = { name };
      const movie = await addToFavorites(movieData);
      setMovies([...movies, movie]);
    } catch (e) {}
  };

  const onChangeRating = (id: string) => async (newValue: number) => {
    try {
      const updatedMovie = await patchFavorite(id, newValue);
      const newMovies = movies.map((movie: IFavoriteMovie) => {
        if (movie._id === updatedMovie._id) {
          return { ...movie, stars: updatedMovie.stars };
        }
        return movie;
      });
      setMovies(newMovies);
    } catch (e) {}
  };

  const onDelete = (id: string) => async () => {
    try {
      await deleteFromFavorites(id);
      const newMovies = movies.filter((movie: IFavoriteMovie) => movie._id !== id);
      setMovies(newMovies);
    } catch (e) {}
  };

  return (
    <React.Fragment>
      <h1>Favorites</h1>
      <div className="flex">
        <div className="mr-4">
          <img src={shootingStar} alt="shooting star" className="w-20" />
        </div>
        <div className="flex-grow">
          <AddMovieForm
            label="Add a movie to your favorites"
            buttonLabel="Add to favorites"
            onSubmit={onSubmit}
          />
        </div>
      </div>
      <h2>These are your favorite movies:</h2>
      <table className="w-full">
        <thead className="font-bold">
          <tr>
            <th>Name</th>
            <th>Your rating</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie: IFavoriteMovie) => (
            <tr key={movie._id}>
              <td>{movie.name}</td>
              <td>
                <Stars value={movie.stars} onChange={onChangeRating(movie._id as string)} />
              </td>
              <td>
                <IconButton color="red" onClick={onDelete(movie._id as string)}>
                  <FaTimes />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Favorites;
