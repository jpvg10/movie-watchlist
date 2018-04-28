import React from 'react';

//Component requires
import TableComponent from './table-component';
import { toast } from 'react-toastify';

// Authentication module
import Auth from '../../auth';

class Watchlist extends React.PureComponent {
	// Custom methods
	onDeleteWatchlistItem(item) {
		const { deleteWatchlistItem } = this.props;
		deleteWatchlistItem({ name: item });
	}

	onMoveWatchlistItem(item) {
		const { moveWatchlistItem } = this.props;
		moveWatchlistItem({ name: item });
	}

	// Component methods
	constructor(props) {
		super(props);
		this.onDeleteWatchlistItem = this.onDeleteWatchlistItem.bind(this);
		this.onMoveWatchlistItem = this.onMoveWatchlistItem.bind(this);
	}	

	componentDidMount() {
		if(!Auth.isUserAuthenticated()){
			this.props.history.push('/');
		}else{
			this.props.getWatchlistItems();
		}
	}

	componentWillReceiveProps(nextProps) {
		const { getStatus, deleteStatus, moveStatus, resetDeleteWatchlistItemStatus, resetMoveWatchlistItemStatus } = nextProps;
		
		if(getStatus === 'failed'){
			toast.error('Oops! Can\'t retrieve your watchlist. Try again later.');
		}		

		if(deleteStatus === 'deleted'){
			toast.success('Deleted!');
			resetDeleteWatchlistItemStatus();
		}else if(deleteStatus === 'failed'){
			toast.error('Oops! Something happened. Try again later.');
		}

		if(moveStatus === 'moved'){
			toast.success('Moved to favorites!');
			resetMoveWatchlistItemStatus();
		}else if(moveStatus === 'failed'){
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
					onMoveWatchlistItem={this.onMoveWatchlistItem}
				/>
			</div>
		);
	}
};

export default Watchlist;
