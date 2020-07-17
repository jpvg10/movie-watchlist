import React, { useState, useEffect } from 'react';
import { IMovie, IFavoriteMovie } from '../../utils/interfaces';
import { ERequestStatus } from '../../utils/enums';
import AddMovieForm from '../AddMovieForm/AddMovieForm';
import { getFavorites, addToFavorites } from '../../api/favorites';
import shootingStar from './shooting-star.png';

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

  return (
    <React.Fragment>
      <h1>Favorites</h1>
      <img src={shootingStar} alt="shooting star" className="w-16" />
      <AddMovieForm
        label="Add a movie to your favorites"
        buttonLabel="Add to favorites"
        onSubmit={onSubmit}
      />
      <h2>These are your favorite movies:</h2>
      {movies.map((movie: IFavoriteMovie) => (
        <p key={movie._id}>{movie.name}</p>
      ))}
    </React.Fragment>
  );
};

export default Favorites;
