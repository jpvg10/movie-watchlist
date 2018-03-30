import React from 'react';
import styled from 'styled-components';

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
			<table className={this.props.className}>
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

export default styled(TableComponent).attrs({
	className: 'table is-fullwidth is-hoverable'
})`
	@media (max-width: 768px) {
		table, thead, tbody, th, td, tr {
			display: block;
		}

		thead tr {
			position: absolute;
			top: -9999px;
			left: -9999px;
		}

		tr {
			border: 1px solid #ccc;
		}

		td {
			border: none;
			border-bottom: 1px solid #eee;
			position: relative;
			padding-left: 50%;
		}

		td:before {
			position: absolute;
			top: 6px;
			left: 6px;
			width: 45%;
			padding-right: 10px;
			white-space: nowrap;
		}

		td:nth-of-type(1):before { content: "Name"; font-weight: bold }
		td:nth-of-type(2):before { content: "Director"; font-weight: bold }
		td:nth-of-type(3):before { content: "Year"; font-weight: bold }
		td:nth-of-type(4):before { content: "Your rating"; font-weight: bold }
		td:nth-of-type(5):before { content: "Remove"; font-weight: bold }

		.table tbody tr:last-child td {
			border-bottom-width: 1px;
		}
	}
`;
