import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';

const App: React.FC = () => {
  return (
    <div>
      {/*  <Navbar /> */}
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
