import React from 'react';
import PropTypes from 'prop-types';

//Component requires
import ReactStars from 'react-stars'

class Item extends React.PureComponent {
	// Custom methods
	handleDelete() {
		const { name, onDelete } = this.props;
		onDelete(name);
	}

	ratingChanged(newRating) {
		const { name, onEdit } = this.props;
		this.setState({
			stars: newRating
		}, () => {
			onEdit(name, newRating);
		});
	}

	// Component methods
	constructor(props) {
		super(props);
		this.state = {
			stars: props.stars
		};
		this.handleDelete = this.handleDelete.bind(this);
		this.ratingChanged = this.ratingChanged.bind(this);
	}

	render() {
		return(
			<tr>
				<td>{this.props.name}</td>
				<td>-</td>
				<td>-</td>
				<td>
					<ReactStars half={false} size={20} onChange={this.ratingChanged} value={this.state.stars} />
				</td>
				<td>
					<button className="button is-danger is-outlined" onClick={this.handleDelete}><i className="fa fa-times"></i></button>
				</td>
			</tr>
		);
	}
};

Item.propTypes = {
	name: PropTypes.string.isRequired,
	stars: PropTypes.number,
	onEdit: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired
};

export default Item;
