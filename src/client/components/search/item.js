import React from 'react';

class Item extends React.Component {
	// Custom functions
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

export default Item;
