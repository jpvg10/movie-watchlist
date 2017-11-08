import React from 'react';

//Component requires
import TableComponent from './table-component';

// Authentication module
import Auth from '../../auth';

class Favorites extends React.Component {
	componentWillMount() {
		if(!Auth.isUserAuthenticated()){
			this.props.history.push('/');
		}
	}

	render() {
		return(
			<div>
				<article className="media">
					<figure className="media-left">
						<p className="image is-64x64">
							<img src="/img/shooting-star.png" />
						</p>
					</figure>
					<div className="media-content">
						<h1 className="title">These are your favorite movies:</h1>
					</div>
				</article>
			 	
			 	<TableComponent />
			</div>
		);
	}
};

export default Favorites;
