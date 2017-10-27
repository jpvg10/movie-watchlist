import React from 'react';

class Search extends React.Component {
	render() {
		return(
			<div>
			 	<h1 className="title">Search for movies</h1>

			 	<form>
			 	<div class="field has-addons">
					<div class="control">
						<input class="input" type="text" placeholder="Name of the movie" />
					</div>
					<div class="control">
						<a class="button is-info">Search</a>
					</div>
				</div>

			 	</form>
			</div>
		);
	}
};

export default Search;
