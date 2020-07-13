import React from 'react';
import popcorn from './popcorn.png';

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <h1>Welcome to the Movie Watchlist!</h1>

      <div>
        <img src={popcorn} alt="popcorn" />
        <div>Keep track of the movies you want to watch and your favorite movies of all time!</div>
      </div>
    </React.Fragment>
  );
};

export default Home;
