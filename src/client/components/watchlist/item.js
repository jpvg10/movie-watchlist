import React from 'react';

class Item extends React.Component {
	// Custom functions
	handleDelete() {
		const { name, onDelete } = this.props;
		onDelete(name);
	}

	moveToFavorites() {
		//this.props.onMove(this.props.name);
	}

	// Component methods
	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
		this.moveToFavorites = this.moveToFavorites.bind(this);
	}

	render() {
		return(
			<tr>				
				<td>{this.props.name}</td>
				<td></td>
				<td></td>
				<td>
					<button className="button is-success is-outlined" onClick={this.moveToFavorites}><i className="fa fa-heart"></i></button>
				</td>
				<td>
					<button className="button is-danger is-outlined" onClick={this.handleDelete}><i className="fa fa-times"></i></button>
				</td>		
			</tr>
		);
	}
};

export default Item;
