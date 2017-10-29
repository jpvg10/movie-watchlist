import React from 'react';

//Component requires
import UserForm from '../shared/user-form';

class Register extends React.Component {
	// Custom methods
	onSubmit() {
		console.log('register');
	}

	// Component methods
	constructor() {
		super();
		this.onSubmit = this.onSubmit.bind(this);
	}

	render() {
		return(
			<div>
				<h1 className="title">Register</h1>
				<UserForm message="Register" onSubmit={this.onSubmit} />
			</div>
		);
	}
};

export default Register;
