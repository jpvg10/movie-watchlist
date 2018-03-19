import React from 'react';

//Component requires
import Item from './item';

class TableComponent extends React.Component {	
	render() {
		const { favorites, onEditFavorite, onDeleteFavorite } = this.props;
		
		let movies = favorites.map((item, index) => {
			return(
				<Item name={item.name} stars={item.stars} key={index} onEdit={onEditFavorite} onDelete={onDeleteFavorite} />
			);
		});

		return(
			<table className="table is-fullwidth is-hoverable">
				<thead>
					<tr>
						<th>Name</th>
						<th>Director</th>
						<th>Year</th>
						<th>Your rating</th>
						<th>Remove</th>
					</tr>
				</thead>
				<tbody>
					{movies}
				</tbody>
			</table>
		);
	}
};

export default TableComponent;
