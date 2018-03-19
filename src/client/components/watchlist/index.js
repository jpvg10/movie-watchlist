import React from 'react';

//Component requires
import TableComponent from './table-component';
import { toast } from 'react-toastify';

// Authentication module
import Auth from '../../auth';

class Watchlist extends React.Component {
	// Custom functions
	onDeleteWatchlistItem(item) {
		const { deleteWatchlistItem } = this.props;
		deleteWatchlistItem({ name: item });
	}

	// Component methods
	constructor(props) {
		super(props);
		this.onDeleteWatchlistItem = this.onDeleteWatchlistItem.bind(this);		
	}

	componentWillMount() {
		if(!Auth.isUserAuthenticated()){
			this.props.history.push('/');
		}
	}

	componentDidMount() {
		const { getWatchlistItems } = this.props;
		getWatchlistItems();
	}

	componentWillReceiveProps(nextProps) {
		const { getStatus, deleteStatus } = nextProps;
		
		if(getStatus === 'failed'){
			toast.error('Oops! Can\'t retrieve your watchlist. Try again later.');
		}		

		if(deleteStatus === 'deleted'){
			toast.success('Deleted!');
		}else if(deleteStatus === 'failed'){
			toast.error('Oops! Something happened. Try again later.');
		}
	}

	render() {
		const { watchlistItems } = this.props;
		return(
			<div>
				<article className="media">
					<figure className="media-left">
						<p className="image is-64x64">
							<img src="/img/seat.png" />
						</p>
					</figure>
					<div className="media-content">
						<h1 className="title">These are the movies you have yet to watch:</h1>
					</div>
				</article>
			 	
			 	<TableComponent 
					watchlistItems={watchlistItems} 
					onDeleteWatchlistItem={this.onDeleteWatchlistItem}
				/>
			</div>
		);
	}
};

export default Watchlist;
