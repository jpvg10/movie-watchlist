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
    <nav>
      <div className="container mx-auto px-4 flex justify-between">
        <h4>
          <Link to="/" className="mr-4">
            Movie watchlist
          </Link>
        </h4>
        {auth?.isAuthenticated && (
          <div>
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
