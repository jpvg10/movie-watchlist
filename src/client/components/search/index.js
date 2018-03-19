import React from 'react';

// Component requires
import SearchForm from './search-form';
import Item from './item';
import { toast } from 'react-toastify';

// Authentication module
import Auth from '../../auth';

class Search extends React.Component {
	// Custom functions
	onSearch(name) {
		let results = [{ name: name }];
		this.setState({
			results: results
		});
	}

	onAddFavorite(item) {
		const { addFavorite } = this.props;
		addFavorite({ name: item });
	}

	onAddWatchlistItem(item) {
		const { addWatchlistItem } = this.props;
		addWatchlistItem({ name: item });
	}

	// Component methods
	constructor(props) {
		super(props);
		this.state = {
			results: []
		};
		this.onSearch = this.onSearch.bind(this);
		this.onAddFavorite = this.onAddFavorite.bind(this);
		this.onAddWatchlistItem = this.onAddWatchlistItem.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		const { addFavoriteStatus, addWatchlistItemStatus } = nextProps;

		if(addFavoriteStatus === 'added'){
			toast.success('Added to favorites!');
		}else if(addFavoriteStatus === 'failed'){
			toast.error('Oops! Something happened. Try again later.');
		}

		if(addWatchlistItemStatus === 'added'){
			toast.success('Added to the watchlist!');
		}else if(addWatchlistItemStatus === 'failed'){
			toast.error('Oops! Something happened. Try again later.');
		}
	}

	componentWillMount() {
		if(!Auth.isUserAuthenticated()){
			this.props.history.push('/');
		}
	}
	
	render() {
		const { addWatchlistItem, addFavorite } = this.props;
		let results = this.state.results;
		results = results.map((item, index) => {
			return(
				<Item
					key={index}
					name={item.name}
					director={item.director}
					year={item.year}
					onAddFavorite={this.onAddFavorite}				
					onAddWatchlistItem={this.onAddWatchlistItem}
				/>
			);
		});

		return(
			<div>
				<article className="media">
					<figure className="media-left">
						<p className="image is-64x64">
							<img src="/img/video-camera.png" />
						</p>
					</figure>
					<div className="media-content">
						<h1 className="title">Search for movies</h1>
					</div>
				</article>
								
				<SearchForm onSearch={this.onSearch} />
				
				<div className="section">
					<ul>
						{results}
					</ul>
				</div>
			</div>
		);
	}
};

export default Search;
