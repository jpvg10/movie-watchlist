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
			method: 'delete',
			url: '/api/favorites',
			headers: { Authorization: 'Bearer ' + Auth.getToken() }, 
			data: { name: item } 
		};
		axios.request(options)
			.then(function (response){
				this.setState({
					movies: response.data
				});
			}.bind(this))
			.catch(function (error){
				console.log(error);
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
		let options = {
			method: 'get',
			url: '/api/favorites',
			headers: { Authorization: 'Bearer ' + Auth.getToken() }
		};
		axios.request(options)
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
