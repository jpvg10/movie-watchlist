import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../utils/authContext';
import { deleteTokenData } from '../../utils/tokenHelper';
import { logout } from '../../api/authentication';

const Navbar: React.FC = () => {
  const auth = useContext(AuthContext);

  const onLogout = async () => {
    try {
      await logout();
      deleteTokenData();
      auth?.setIsAuthenticated(false);
    } catch (e) {}
  };

  return (
    <nav className="bg-yellow-400 py-4 fixed w-full">
      <div className="container mx-auto px-4 flex justify-between">
        <h2 className="m-0">
          <Link to="/">Movie watchlist</Link>
        </h2>
        <div className="flex items-center">
          {auth?.isAuthenticated ? (
            <React.Fragment>
              <Link to="/watchlist" className="mr-4">
                Watchlist
              </Link>
              <Link to="/favorites" className="mr-4">
                Favorites
              </Link>
              <button onClick={onLogout}>Logout</button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link to="/login" className="mr-4">
                Log in
              </Link>
              <Link to="/signup">Sign up</Link>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
