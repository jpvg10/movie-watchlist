import React from 'react';

class ListItem extends React.Component {
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
					<button className="button is-danger" onClick={this.handleDelete}>X</button>
				</td>				
			</tr>
		);
	}
};

export default ListItem;
