import React from 'react';

// Authentication module
import Auth from '../../auth';

class Search extends React.Component {
	componentWillMount() {
		if(!Auth.isUserAuthenticated()){
			this.props.history.push('/');
		}
	}
	
	render() {
		return(
			<div>
			 	<h1 className="title">Search for movies</h1>

			 	<form>
				 	<div className="field has-addons">
						<div className="control is-expanded">
							<input className="input" type="text" placeholder="Name of the movie" />
						</div>
						<div className="control">
							<a className="button is-info">Search</a>
						</div>
					</div>
			 	</form>
			</div>
		);
	}
};

export default Search;
