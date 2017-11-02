import React from 'react';

//Component requires
import ReactStars from 'react-stars'

class Item extends React.Component {
	constructor() {
		super();
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete(){
		this.props.onDelete(this.props.name);
	}

	render() {
		return(
			<tr>				
				<td>{this.props.name}</td>
				<td></td>
				<td></td>
				<td>
					<ReactStars half={false} size={20}/>
				</td>
				<td>
					<button className="button is-danger is-outlined" onClick={this.handleDelete}><i className="fa fa-times"></i></button>
				</td>				
			</tr>
		);
	}
};

export default Item;
