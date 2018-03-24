import React from 'react';

class SearchForm extends React.Component {
	// Custom methods
	handleSubmit(e) {
		e.preventDefault();
		this.props.onSearch(this.refs.title.value);
	}

	// Component methods
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
			 	<div className="field has-addons">
					<div className="control is-expanded">
						<input className="input" type="text" placeholder="Name of the movie" ref="title" />
					</div>
					<div className="control">
						<input className="button is-info" type="submit" value="Search" />
					</div>
				</div>
		 	</form>
		);
	}
}

export default SearchForm;
