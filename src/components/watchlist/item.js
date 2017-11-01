import React from 'react';

class Item extends React.Component {
	constructor() {
		super();
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete(){
		this.props.onDelete(this.props.title);
	}

	render() {
		return(
			<tr>				
				<td>{this.props.title}</td>
				<td></td>
				<td></td>
				<td>
					<button className="button is-success is-outlined"><i className="fa fa-heart"></i></button>
				</td>
				<td>
					<button className="button is-danger is-outlined" onClick={this.handleDelete}><i className="fa fa-times"></i></button>
				</td>		
			</tr>
		);
	}
};

export default Item;
