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
    <nav className="bg-yellow-400 py-4 mb-4">
      <div className="container mx-auto px-4 flex justify-between">
        <h2>
          <Link to="/" className="mr-4">
            Movie watchlist
          </Link>
        </h2>
        {auth?.isAuthenticated && (
          <div className="flex items-center">
            <Link to="/watchlist" className="mr-4">
              Watchlist
            </Link>
            <Link to="/favorites" className="mr-4">
              Favorites
            </Link>
            <button onClick={onLogout}>Logout</button>
          </div>
        )}
        {!auth?.isAuthenticated && (
          <div>
            <Link to="/login" className="mr-4">
              Log in
            </Link>
            <Link to="/signup">Sign up</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
