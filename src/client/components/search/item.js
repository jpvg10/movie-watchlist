import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.PureComponent {
	// Custom methods
	onClickFavorites() {
		const { name, onAddFavorite } = this.props;
		onAddFavorite(name);
	}
	
	onClickWatchlist() {
		const { name, onAddWatchlistItem } = this.props;
		onAddWatchlistItem(name);
	}

	// Component methods
	constructor(props) {
		super(props);
		this.onClickFavorites = this.onClickFavorites.bind(this);
		this.onClickWatchlist = this.onClickWatchlist.bind(this);
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
						<p><button className="button is-default" onClick={this.onClickWatchlist}>Add to watchlist</button></p>
						<p><button className="button is-default" onClick={this.onClickFavorites}>Add to favorites</button></p>
					</div>
				</div>
			</li>
		);
	}
};

Item.propTypes = {
	name: PropTypes.string.isRequired,
	director: PropTypes.string,
	year: PropTypes.string,
	onAddFavorite: PropTypes.func.isRequired,
	onAddWatchlistItem: PropTypes.func.isRequired
};

export default Item;
