import React from 'react';

//Component requires
import TableComponent from './table-component';

// Authentication module
import Auth from '../../auth';

class Favorite extends React.Component {
	componentWillMount() {
		if(!Auth.isUserAuthenticated()){
			this.props.history.push('/');
		}
	}

	render() {
		return(
			<div>
			 	<h1 className="title">These are your favorite movies:</h1>
			 	<TableComponent />
			</div>
		);
	}
};

export default Favorite;
