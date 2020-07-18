import React, { useState, useEffect } from 'react';
import { IMovie } from '../../utils/interfaces';
import { ERequestStatus } from '../../utils/enums';
import { getWatchlist, addToWatchlist } from '../../api/watchlist';
import AddMovieForm from '../AddMovieForm/AddMovieForm';
import seat from './seat.png';

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
      <div className="flex">
        <div className="mr-4">
          <img src={seat} alt="seat" className="w-20" />
        </div>
        <div className="flex-grow">
          <AddMovieForm
            label="Add a movie to your watchlist"
            buttonLabel="Add to watchlist"
            onSubmit={onSubmit}
          />
        </div>
      </div>

      <h2>These are the movies you have yet to watch:</h2>
      <table className="w-full">
        <thead className="font-bold">
          <td>Name</td>
          <td>Move to favorites</td>
          <td>Delete</td>
        </thead>
        <tbody>
          {movies.map((movie: IMovie) => (
            <tr key={movie._id}>
              <td>{movie.name}</td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Watchlist;
