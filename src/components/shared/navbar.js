import React from 'react';
import { Link } from 'react-router-dom';

// Authentication module
import Auth from '../../auth';

class Navbar extends React.Component {
	render() {
		return(
			<nav className="navbar is-warning">
				<div className="container">
					<div className="navbar-brand">
						<Link className="navbar-item" to="/">
							<img src="/img/clapboard.png" />
							<span className="title is-4">Movie Watchlist</span>
						</Link>

						<button className="button navbar-burger">
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>

					<div className="navbar-menu">
						{Auth.isUserAuthenticated() ? (
							<div className="navbar-end">
								<Link to="/watchlist" className="navbar-item">Watchlist</Link>
								<Link to="/favorites" className="navbar-item">Favorites</Link>
								<Link to="/search" className="navbar-item">Search</Link>
								<Link to="/logout" className="navbar-item">Log out</Link>
							</div>
						):(
							<div className="navbar-end">
								<Link to="/login" className="navbar-item">Log in</Link>
								<Link to="/signup" className="navbar-item">Sign up</Link>
							</div>
						)}
					</div>
				</div>
			</nav>
		);
	}
};

export default Navbar;
