import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Navbar from '../Navbar';
import Login from '../Login';
import Signup from '../Signup';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container mx-auto px-4">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </div>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default App;
