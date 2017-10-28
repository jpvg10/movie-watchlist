import React from 'react';

//Component requires
import TableComponent from './table-component';

class Favorite extends React.Component {
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
