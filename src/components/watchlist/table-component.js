import React from 'react';
import axios from 'axios';

//Component requires
import Item from './item';

// Authentication module
import Auth from '../../auth';

class TableComponent extends React.Component {
	// Custom functions
	onDelete(item) {
		let options = { 
			headers: { Authorization: 'Bearer ' + Auth.getToken() }, 
			data: { title: item } 
		};
		axios.delete('/api/watchlist', options)
			.then(function (response){
				this.setState({
					movies: response.data
				});
			}.bind(this))
			.catch(function (error){
				console.log(error);
			});
	}

	onAdd(item) {
		let updatedMovies = this.state.movies;
		updatedMovies.push(item);
		this.setState({
			movies: updatedMovies
		});
	}

	// Component functions
	constructor() {
		super();
		this.state = {
			movies: []
		};
		this.onDelete = this.onDelete.bind(this);
		this.onAdd = this.onAdd.bind(this);
	}

	render() {
		let movies = this.state.movies;
		movies = movies.map(function(item, index){
			return(
				<Item title={item} key={index} onDelete={this.onDelete} />
			);
		}.bind(this));

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

	componentDidMount() {
		let options = {
			headers: { Authorization: 'Bearer ' + Auth.getToken() }
		};
		axios.get('/api/watchlist', options)
			.then(function (response){
				this.setState({
					movies: response.data
				});
			}.bind(this))
			.catch(function (error){
				console.log(error);
			});
	}
};

export default TableComponent;
