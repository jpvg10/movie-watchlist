import React from 'react';
import axios from 'axios';

//Component requires
import Item from './item';

// Authentication module
import Auth from '../../auth';

class TableComponent extends React.Component {
	// Custom functions
	onDelete(item) {
		var updatedMovies = this.state.movies.filter(function(val, index){
			return item !== val;
		});
		this.setState({
			movies: updatedMovies
		});
	}

	onAdd(item) {
		var updatedMovies = this.state.movies;
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
		var movies = this.state.movies;
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
		let headers = {
			Authorization: 'Bearer ' + Auth.getToken()
		};
		axios.get('/api/movies', { headers: headers })
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
