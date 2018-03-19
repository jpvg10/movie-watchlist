import React from 'react';
import { editFavorite } from '../../api/favorites';

//Component requires
import ReactStars from 'react-stars'
import { toast } from 'react-toastify';

class Item extends React.Component {
	// Custom functions
	handleDelete() {
		this.props.onDelete(this.props.name);
	}

	ratingChanged(newRating) {
		editFavorite({ name: this.props.name, newRating })
			.then(function(response){
				toast.success('Updated!');
			})
			.catch(function(error){
				toast.error('Oops! Something happened. Try again later.');
			});
	}

	// Component functions	
	constructor() {
		super();
		this.handleDelete = this.handleDelete.bind(this);
		this.ratingChanged = this.ratingChanged.bind(this);
	}

	render() {
		return(
			<tr>				
				<td>{this.props.name}</td>
				<td></td>
				<td></td>
				<td>
					<ReactStars half={false} size={20} onChange={this.ratingChanged} value={this.props.stars} />
				</td>
				<td>
					<button className="button is-danger is-outlined" onClick={this.handleDelete}><i className="fa fa-times"></i></button>
				</td>				
			</tr>
		);
	}
};

export default Item;
