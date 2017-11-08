import React from 'react';

// Authentication module
import Auth from '../../auth';

class Home extends React.Component {
	render() {
		return(
			<div>
			 	<h1 className="title">Welcome to the Movie Watchlist!</h1>
			 	
			 	<div className="columns">
					<div className="column is-narrow">
						{Auth.isUserAuthenticated() ? (
							<img src="/img/popcorn.png" />
						):(
							<img src="/img/popcorn-blank.png" />
						)}
					</div>
					<div className="column">
						Keep track of the movies you want to watch and your favorite movies of all time!
					</div>
				</div>
			</div>
		);
	}
};

export default Home;
