import React from 'react';
import popcorn from './popcorn.png';

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <h1>Welcome to the Movie Watchlist!</h1>

      <div className="flex">
        <img src={popcorn} alt="popcorn" className="mr-4 w-32" />
        <div>Keep track of the movies you want to watch and your favorite movies of all time!</div>
      </div>
    </React.Fragment>
  );
};

export default Home;
