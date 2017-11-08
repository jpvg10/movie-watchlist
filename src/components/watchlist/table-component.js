import React from 'react';
import axios from 'axios';

// Component requires
import Item from './item';
import { toast } from 'react-toastify';

// Authentication module
import Auth from '../../auth';

class TableComponent extends React.Component {
	// Custom functions
	onDelete(item) {
		let options = { 
			method: 'delete',
			url: '/api/watchlist',
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

	onMove(item) {
		let optionsDelete = { 
			method: 'delete',
			url: '/api/watchlist',
			headers: { Authorization: 'Bearer ' + Auth.getToken() }, 
			data: { name: item } 
		};

		let optionsPost = {
			method: 'post',
			url: '/api/favorites',
			headers: { Authorization: 'Bearer ' + Auth.getToken() }, 
			data: { name: item } 
		}
		
		axios.request(optionsDelete)
			.then(function(responseDelete){
				axios.request(optionsPost)
					.then(function(responsePost){
						this.setState({
							movies: responseDelete.data
						});
						toast.success('Moved to favorites!');
					}.bind(this))
					.catch(function(error){
						toast.error('Oops! Something happened. Try again later.');
					});
			}.bind(this))
			.catch(function(error){
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
		this.onMove = this.onMove.bind(this);
	}

	render() {
		let movies = this.state.movies;
		movies = movies.map(function(item, index){
			return(
				<Item name={item.name} key={index} onDelete={this.onDelete} onMove={this.onMove} />
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
			method: 'get',
			url: '/api/watchlist',
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
