import React, { useState, useEffect } from 'react';
import { FaHeart, FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { IMovie } from '../../utils/interfaces';
import { ERequestStatus } from '../../utils/enums';
import {
  getWatchlist,
  addToWatchlist,
  deleteFromWatchlist,
  moveToFavorites
} from '../../api/watchlist';
import AddMovieForm from '../AddMovieForm/AddMovieForm';
import IconButton from '../Common/IconButton';
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
    } catch (e) {
      toast.error('An error has occurred :(');
    }
  };

  const onMoveToFavorites = (id: string) => async () => {
    try {
      await moveToFavorites(id);
      const newMovies = movies.filter((movie: IMovie) => movie._id !== id);
      setMovies(newMovies);
      toast.success('Moved!');
    } catch (e) {
      toast.error('An error has occurred :(');
    }
  };

  const onDelete = (id: string) => async () => {
    try {
      await deleteFromWatchlist(id);
      const newMovies = movies.filter((movie: IMovie) => movie._id !== id);
      setMovies(newMovies);
    } catch (e) {
      toast.error('An error has occurred :(');
    }
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
          <tr>
            <th>Name</th>
            <th>Move to favorites</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie: IMovie) => (
            <tr key={movie._id}>
              <td>{movie.name}</td>
              <td>
                <IconButton color="green" onClick={onMoveToFavorites(movie._id as string)}>
                  <FaHeart />
                </IconButton>
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

export default Watchlist;
