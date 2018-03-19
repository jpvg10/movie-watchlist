import React from 'react';

// Component requires
import Item from './item';

class TableComponent extends React.Component {	
	render() {
		const { watchlistItems, onDeleteWatchlistItem } = this.props;
		let movies = watchlistItems.map((item, index) => {
			return(
				<Item name={item.name} key={index} onDelete={onDeleteWatchlistItem} onMove={this.onMove} />
			);
		});

		return(
			<table className="table is-fullwidth is-hoverable">
				<thead>
					<tr>
						<th>Name</th>
						<th>Director</th>
						<th>Year</th>
						<th>Move to favorites</th>
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
