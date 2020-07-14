import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';

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
