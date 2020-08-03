import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AuthContext from './utils/authContext';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Watchlist from './components/Watchlist';
import Favorites from './components/Favorites';
import Footer from './components/Footer';
import { IAuthContext } from './utils/interfaces';
import { getTokenData } from './utils/tokenHelper';
import 'react-toastify/dist/ReactToastify.min.css';
import Error404 from './components/Error404';

const App: React.FC = () => {
  const tokenData = getTokenData();

  const [isAuthenticated, setIsAuthenticated] = useState(tokenData !== null);

  const contextValue: IAuthContext = {
    isAuthenticated,
    setIsAuthenticated
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <Navbar />
      <div className="flex flex-col h-screen">
        <div className="container mx-auto mb-4 px-4 pt-24 sm:pt-20 flex-grow">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route
              path="/watchlist"
              exact
              render={() => (isAuthenticated ? <Watchlist /> : <Redirect to="/" />)}
            />
            <Route
              path="/favorites"
              exact
              render={() => (isAuthenticated ? <Favorites /> : <Redirect to="/" />)}
            />
            <Route component={Error404} />
          </Switch>
        </div>
        <Footer />
      </div>

      <ToastContainer autoClose={3000} />
    </AuthContext.Provider>
  );
};

export default App;
