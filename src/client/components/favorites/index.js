import React from 'react';

//Component requires
import TableComponent from './table-component';
import { toast } from 'react-toastify';

// Authentication module
import Auth from '../../auth';

class Favorites extends React.Component {
	// Custom functions
	onEditFavorite(item, newRating) {
		const { editFavorite } = this.props;
		editFavorite({ name: item, stars: newRating });
	}

	onDeleteFavorite(item) {
		const { deleteFavorite } = this.props;
		deleteFavorite({ name: item });
	}

	// Component methods
	constructor(props) {
		super(props);
		this.onEditFavorite = this.onEditFavorite.bind(this);
		this.onDeleteFavorite = this.onDeleteFavorite.bind(this);
	}

	componentWillMount() {
		if(!Auth.isUserAuthenticated()){
			this.props.history.push('/');
		}
	}

	componentDidMount() {
		const { getFavorites } = this.props;
		getFavorites();
	}

	componentWillReceiveProps(nextProps) {
		const { getStatus, editStatus, deleteStatus } = nextProps;
		
		if(getStatus === 'failed'){
			toast.error('Oops! Can\'t retrieve your favorite movies. Try again later.');
		}

		if(editStatus === 'edited'){
			toast.success('Updated!');
		}else if(editStatus === 'failed'){
			toast.error('Oops! Something happened. Try again later.');
		}

		if(deleteStatus === 'deleted'){
			toast.success('Deleted!');
		}else if(deleteStatus === 'failed'){
			toast.error('Oops! Something happened. Try again later.');
		}
	}

	render() {
		const { favorites } = this.props;
		return(
			<div>
				<article className="media">
					<figure className="media-left">
						<p className="image is-64x64">
							<img src="/img/shooting-star.png" />
						</p>
					</figure>
					<div className="media-content">
						<h1 className="title">These are your favorite movies:</h1>
					</div>
				</article>
			 	
			 	<TableComponent
					favorites={favorites} 
					onEditFavorite={this.onEditFavorite} 
					onDeleteFavorite={this.onDeleteFavorite}
				/>
			</div>
		);
	}
};

export default Favorites;
