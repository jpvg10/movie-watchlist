import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="container mx-auto px-4 flex justify-between">
        <h4>
          <Link to="/" className="mr-4">
            Movie watchlist
          </Link>
        </h4>
        <div>
          <Link to="/login" className="mr-4">
            Log in
          </Link>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
