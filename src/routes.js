import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Home from './components/home';
import Search from './components/search';
import Watchlist from './components/watchlist';
import Favorite from './components/favorite';
import Page404 from './components/page404';
import Navbar from './components/navbar';

class AppRoutes extends React.Component {
	render() {
		return(
			<div>
				<Navbar />
				<Switch>
					<Route exact path="/home" component={Home} />
					<Route exact path="/" component={Home} />
					<Route exact path="/search" component={Search} />
					<Route exact path="/watchlist" component={Watchlist} />
					<Route exact path="/favorite" component={Favorite} />
					<Route component={Page404} />
				</Switch>
			</div>
		);
	}
}

export default AppRoutes;
