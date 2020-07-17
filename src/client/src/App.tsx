import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthContext from './utils/authContext';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Watchlist from './components/Watchlist';
import Favorites from './components/Favorites';
import { IAuthContext } from './utils/interfaces';
import { getTokenData } from './utils/tokenHelper';

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
      <div className="container mx-auto px-4">
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
        </Switch>
      </div>
      {/* <Footer /> */}
    </AuthContext.Provider>
  );
};

export default App;
