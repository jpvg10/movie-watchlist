import React from 'react';
import axios from 'axios';

// Authentication module
import Auth from '../../auth';

class Item extends React.Component {
	// Custom functions
	addToWatchlist() {
		let options = {
			method: 'post',
			url: '/api/watchlist',
			headers: { Authorization: 'Bearer ' + Auth.getToken() }, 
			data: { name: this.props.name } 
		};
		axios.request(options)
			.then(function(response){
				console.log('Added');
			})
			.catch(function(error){
				console.log(error);
			});
	}

	addToFavorites() {
		let options = { 
			method: 'post',
			url: '/api/favorite',
			headers: { Authorization: 'Bearer ' + Auth.getToken() }, 
			data: { name: this.props.name } 
		};
		axios.request(options)
			.then(function(response){
				console.log('Added');
			})
			.catch(function(error){
				console.log(error);
			});
	}

	// Component functions
	constructor() {
		super();
		this.addToWatchlist = this.addToWatchlist.bind(this);
		this.addToFavorites = this.addToFavorites.bind(this);
	}

	render() {
		return(
			<li>
				<div className="columns">
					<div className="column">
						<h5 className="title is-6">{this.props.name}</h5>
						{/*<p>{this.props.director}, {this.props.year}</p>*/}
					</div>
					<div className="column">
						<p><button className="button is-default" onClick={this.addToWatchlist}>Add to watchlist</button></p>
						<p><button className="button is-default" onClick={this.addToFavorites}>Add to favorites</button></p>
					</div>
				</div>
			</li>
		);
	}
};

export default Item;
