import React from 'react';

class UserForm extends React.Component {
	// Custom methods
	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.refs.email.value, this.refs.password.value);
	}

	// Component methods
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
			 	<div className="field">
					<label className="label">Email</label>
					<div className="control has-icons-left">
						<input className="input" type="text" placeholder="Email" ref="email" />
						<span className="icon is-small is-left">
							<i className="fa fa-envelope"></i>
						</span>
					</div>
				</div>
				<div className="field">
					<label className="label">Password</label>
					<div className="control has-icons-left">
						<input className="input" type="text" placeholder="Password" ref="password" />
						<span className="icon is-small is-left">
							<i className="fa fa-lock"></i>
						</span>
					</div>
				</div>
				<div className="field">
					<div className="control">
						<input className="button is-info" type="submit" value={this.props.message} />
					</div>
				</div>
			</form>
		);
	}
};

export default UserForm;
