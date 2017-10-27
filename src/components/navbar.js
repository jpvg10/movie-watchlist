import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
	render() {
		return(
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div className="container">
					<div className="navbar-brand">
						<Link className="navbar-item" to="/">
							<h2>Movie Watchlist</h2>
						</Link>

						<button className="button navbar-burger">
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>

					<div className="navbar-menu">
						<div className="navbar-end">
							<Link to="/watchlist" className="navbar-item">Watchlist</Link>
							<Link to="/favorite" className="navbar-item">Favorite</Link>
							<Link to="/search" className="navbar-item">Search</Link>
						</div>
					</div>
				</div>		
			</nav>
		);
	}
};

export default Navbar;
