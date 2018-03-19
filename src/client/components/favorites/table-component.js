import React from 'react';
import { getFavorites, deleteFavorite } from '../../api/favorites';

//Component requires
import Item from './item';
import { toast } from 'react-toastify';

class TableComponent extends React.Component {
	// Custom functions
	onDelete(item) {
		deleteFavorite({ name: item })
			.then(function (response){
				this.setState({
					movies: response.data
				});
			}.bind(this))
			.catch(function (error){
				toast.error('Oops! Something happened. Try again later.');
			});
	}

	// Component functions
	constructor() {
		super();
		this.state = {
			movies: []
		};
		this.onDelete = this.onDelete.bind(this);
	}

	render() {
		let movies = this.state.movies;
		movies = movies.map(function(item, index){
			return(
				<Item name={item.name} stars={item.stars} key={index} onDelete={this.onDelete} />
			);
		}.bind(this));

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

	componentDidMount() {
		getFavorites()
			.then(function (response){
				this.setState({
					movies: response.data
				});
			}.bind(this))
			.catch(function (error){
				toast.error('Oops! Can\'t retrieve your favorite movies. Try again later.');
			});
	}
};

export default TableComponent;
