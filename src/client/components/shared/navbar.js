import React from 'react';
import { Link } from 'react-router-dom';

// Authentication module
import Auth from '../../auth';

class Navbar extends React.Component {
	// Custom methods
	toggleBurger() {
		this.setState({
			burgerActive: !this.state.burgerActive
		});
	}

	// Component methods
	constructor(props) {
		super(props);
		this.state = {
			burgerActive: false
		};
		this.toggleBurger = this.toggleBurger.bind(this);
	}

	render() {
		return(
			<nav className="navbar is-warning">
				<div className="container">
					<div className="navbar-brand">
						<Link className="navbar-item" to="/">
							<img src="/img/popcorn.png" />
							<span className="title is-4">Movie Watchlist</span>
						</Link>

						<button className={"button navbar-burger " + (this.state.burgerActive ? "is-active" : null)} onClick={this.toggleBurger}>
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>

					<div className={"navbar-menu " + (this.state.burgerActive ? "is-active" : null)}>
						{Auth.isUserAuthenticated() ? (
							<div className="navbar-end">
								<Link to="/watchlist" className="navbar-item">Watchlist</Link>
								<Link to="/favorites" className="navbar-item">Favorites</Link>
								<Link to="/search" className="navbar-item">Search</Link>
								<div className="navbar-item has-dropdown is-hoverable">
									<span className="navbar-link">{Auth.getEmail()}</span>
									<div className="navbar-dropdown is-right">
										<span className="navbar-item">
											<Link to="/logout" className="navbar-item">Log out</Link>
										</span>								
									</div>
								</div>
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
