import React, { useState, useEffect } from 'react';
import { IMovie } from '../../utils/interfaces';
import { ERequestStatus } from '../../utils/enums';
import { getWatchlist, addToWatchlist } from '../../api/watchlist';
import AddMovieForm from '../AddMovieForm/AddMovieForm';

const Watchlist: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [requestStatus, setRequestStatus] = useState<ERequestStatus>(ERequestStatus.LOADING);

  useEffect(() => {
    const loadWatchlist = async () => {
      try {
        const result = await getWatchlist();
        setMovies(result);
        setRequestStatus(ERequestStatus.LOADED);
      } catch (e) {
        console.log(e);
        setRequestStatus(ERequestStatus.FAILED);
      }
    };
    loadWatchlist();
  }, []);

  const onSubmit = async (name: string) => {
    try {
      const movieData: IMovie = { name };
      const movie = await addToWatchlist(movieData);
      setMovies([...movies, movie]);
    } catch (e) {}
  };

  return (
    <React.Fragment>
      <h1>Watchlist</h1>
      <AddMovieForm onSubmit={onSubmit} />
      {movies.map((movie: IMovie) => (
        <p key={movie._id}>{movie.name}</p>
      ))}
    </React.Fragment>
  );
};

export default Watchlist;
