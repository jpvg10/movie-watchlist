import React from 'react';
import PropTypes from 'prop-types';

class SearchForm extends React.PureComponent {
	// Custom methods
	onChangeTitle(e) {
		this.setState({
			title: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onSearch(this.state.title);
	}

	// Component methods
	constructor(props) {
		super(props);
		this.state = {
			title: ''
		};
		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
			 	<div className="field has-addons">
					<div className="control is-expanded">
						<input className="input" type="text" placeholder="Name of the movie" value={this.state.title} onChange={this.onChangeTitle} />
					</div>
					<div className="control">
						<input className="button is-info" type="submit" value="Search" />
					</div>
				</div>
		 	</form>
		);
	}
};

SearchForm.propTypes = {
	onSearch: PropTypes.func.isRequired
};

export default SearchForm;
